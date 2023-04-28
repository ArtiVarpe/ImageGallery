import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lightbox } from 'ngx-lightbox';
@Component({
  selector: 'app-image-grid',
  templateUrl: './image-grid.component.html',
  styleUrls: ['./image-grid.component.css']
})
export class ImageGridComponent implements OnInit {
  images: any[] = [];
  filteredImages: any[] = [];
  searchTerm: string = '';
  album: any[] = [];
  currentPage = 1;
  pageSize=1;

  constructor(private http: HttpClient, private lightbox: Lightbox) { }

  ngOnInit() {
    this.http.get('assets/images.json').subscribe((data: any) => {
      this.images = data;
      this.filteredImages = data;
      this.album = data.map((image: { url: string, description: string }) => {
        return {
          src: image.url,
          caption: image.description
        };
      });
    });
  }

  filterImages() {
  this.filteredImages = this.images.filter(image => {
    return image.description.toLowerCase().includes(this.searchTerm.toLowerCase());
   });
  }
 get pagedImages() {
  return this.images.filter(image =>
    image.description.toLowerCase().includes(this.searchTerm.toLowerCase())
  ).slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize);
}

  open(index: number): void {
    this.lightbox.open(this.album, index);
  }
}
