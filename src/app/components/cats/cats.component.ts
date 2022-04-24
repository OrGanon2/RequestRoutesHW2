import { Component, OnInit } from '@angular/core';
import { ImgsService } from 'src/app/services/imgs.service';


@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {

  photos2:any =[];
  constructor(private photo2:ImgsService ) {
    this.photo2.getPhotos2().subscribe((somePhoto)=>{
      this.photos2 = somePhoto;
    })
   }

  ngOnInit() {
  }

}
