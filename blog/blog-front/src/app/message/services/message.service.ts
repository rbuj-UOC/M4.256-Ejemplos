import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageDto } from '../models/message-dto.model';

interface deleteResponse {
  affected: number;
}
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private urlMessageApi: string;

  constructor(private http: HttpClient) {
    this.urlMessageApi = 'http://localhost:3000/messages';
  }

  getMessages(): Promise<MessageDto[]> {
    return this.http.get<MessageDto[]>(this.urlMessageApi).toPromise();
  }

  getMessageById(msgId: number): Promise<MessageDto> {
    return this.http
      .get<MessageDto>(this.urlMessageApi + '/' + msgId)
      .toPromise();
  }

  createMessage(msg: MessageDto): Promise<MessageDto> {
    return this.http.post<MessageDto>(this.urlMessageApi, msg).toPromise();
  }

  updateMessage(msgId: number, msg: MessageDto): Promise<MessageDto> {
    return this.http
      .put<MessageDto>(this.urlMessageApi + '/' + msgId, msg)
      .toPromise();
  }

  deleteMessage(msgId: number): Promise<deleteResponse> {
    return this.http
      .delete<deleteResponse>(this.urlMessageApi + '/' + msgId)
      .toPromise();
  }

  errorLog(error: HttpErrorResponse): void {
    console.error('An error occurred:', error.error.msg);
    console.error('Backend returned code:', error.status);
    console.error('Complete message was::', error.message);
  }

  async wait(ms: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
}
