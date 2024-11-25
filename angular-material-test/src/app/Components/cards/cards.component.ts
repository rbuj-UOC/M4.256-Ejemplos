import { Component, OnInit } from '@angular/core';
import { Image } from '../../Models/image';
import { ImagesService } from '../../Services/images.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent implements OnInit {
  public cards!: Image[];

  constructor(private imageServide: ImagesService) {}

  ngOnInit(): void {
    this.imageServide.getAllImages().subscribe((cards) => (this.cards = cards));
  }
}
