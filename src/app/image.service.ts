import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//import { Image } from './Image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private imagesUrl = 'assets/images.json';

  constructor(private http: HttpClient) {}

 // getImages(): Observable<Image[]> {
   // return this.http.get<Image[]>(this.imagesUrl);
  //}

  //addImage(image: Image): Observable<Image> {
  //  return this.getImages().pipe(
    //  map(images => {
      //  images.push(image);
       // return images;
    //  })
   // );
  //}
  
}
