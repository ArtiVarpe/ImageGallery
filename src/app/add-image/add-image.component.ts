import { Component } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.css']
})
export class AddImageComponent {
  imageUrl: string = '';
  description: string = '';

  constructor(private imageService: ImageService) {}

  addImage(): void {
  //  this.imageService.addImage({ url: this.imageUrl, description: this.description });
    this.imageUrl = '';
    this.description = '';
  }
}
