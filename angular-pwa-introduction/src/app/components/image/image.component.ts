import { Component } from '@angular/core';
import { ImagesService } from '../../services/images.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Image } from '../../models/image.interface';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrl: './image.component.css'
})
export class ImageComponent {
  image!: Image;

  constructor(
    private imagesService: ImagesService,
    // to read parameter from url
    private activatedRoute: ActivatedRoute,
    // to redirect the user of this view if we don't have a valid identificador
    private router: Router
  ) {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('identifier --> ', identifier);

    this.imagesService.getImageById(identifier).subscribe((image) => {
      if (!image) {
        this.router.navigateByUrl('/');
      }
      this.image = image;
      console.log('Image -->', this.image);
    });
  }
}
