import { Component, OnInit } from '@angular/core';
import { ImgsService } from 'src/app/services/imgs.service';


@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {

  photos:any = [];
  constructor(private photo:ImgsService ) {
    this.photo.getPhotos().subscribe((somephoto)=> {
      this.photos =somephoto;
    })
   }

  ngOnInit() {
  }

}
