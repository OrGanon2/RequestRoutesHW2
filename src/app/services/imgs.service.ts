import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ImgsService {

  constructor(private clientimg:HttpClient) {

  }

  getPhotos(){
    return this.clientimg.get("https://dog.ceo/api/breeds/image/random");
  };
  getPhotos2(){
    return this.clientimg.get("https://cat-fact.herokuapp.com/facts");
  };
  getPhotos3(){
    return this.clientimg.get("https://randomfox.ca/floof/?ref=apilist.fun")
  }
}
