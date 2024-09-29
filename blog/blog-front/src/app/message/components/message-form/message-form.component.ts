import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageDto } from '../../models/message-dto.model';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrl: './message-form.component.scss'
})
export class MessageFormComponent {
  message: MessageDto;
  title: UntypedFormControl;
  description: UntypedFormControl;
  messageForm: UntypedFormGroup;
  isValidForm: boolean | null;

  private isUpdateMode: boolean;
  private validRequest: boolean;
  private msgId: string | null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    private formBuilder: UntypedFormBuilder,
    private router: Router
  ) {
    this.isValidForm = null;
    this.msgId = this.activatedRoute.snapshot.paramMap.get('id');
    this.message = new MessageDto('', '');
    this.isUpdateMode = false;
    this.validRequest = false;

    this.title = new UntypedFormControl(this.message.title, [Validators.required, Validators.maxLength(150)]);

    this.description = new UntypedFormControl(this.message.description, Validators.required);

    this.messageForm = this.formBuilder.group({
      title: this.title,
      description: this.description
    });
  }

  async ngOnInit(): Promise<void> {
    // update
    if (this.msgId) {
      this.isUpdateMode = true;
      try {
        this.message = await this.messageService.getMessageById(+this.msgId);

        this.title.setValue(this.message.title);

        this.description.setValue(this.message.description);

        this.messageForm = this.formBuilder.group({
          title: this.title,
          description: this.description
        });
      } catch (error: any) {
        this.messageService.errorLog(error);
      }
    }
  }

  private async managementToast(): Promise<void> {
    // It is just to give an example of a confirmation message using a toast
    const toastMsg = document.getElementById('toastMessage');
    if (toastMsg) {
      // Request OK, show toast and go to home
      if (this.validRequest) {
        toastMsg.className = 'show requestOk';
        toastMsg.textContent = 'Form submitted successfully.';
        await this.messageService.wait(1500);
        toastMsg.className = toastMsg.className.replace('show', '');
        this.router.navigateByUrl('');
      }
      // Request KO, show toast and stay here
      else {
        toastMsg.className = 'show requestKo';
        toastMsg.textContent = 'Error on form submitted, show logs.';
        await this.messageService.wait(1500);
        toastMsg.className = toastMsg.className.replace('show', '');
      }
    }
  }

  private async editMessage(): Promise<boolean> {
    let responseOK: boolean = false;
    if (this.msgId) {
      try {
        await this.messageService.updateMessage(+this.msgId, this.message);
        responseOK = true;
      } catch (error: any) {
        this.messageService.errorLog(error);
      }
    }
    return responseOK;
  }

  private async createMessage(): Promise<boolean> {
    let responseOK: boolean = false;
    try {
      await this.messageService.createMessage(this.message);
      responseOK = true;
    } catch (error: any) {
      this.messageService.errorLog(error);
    }
    return responseOK;
  }

  async saveMessage() {
    this.isValidForm = false;

    if (this.messageForm.invalid) {
      return;
    }

    this.isValidForm = true;
    this.message = this.messageForm.value;

    if (this.isUpdateMode) {
      this.validRequest = await this.editMessage();
    } else {
      this.validRequest = await this.createMessage();
    }

    this.managementToast();
  }
}
