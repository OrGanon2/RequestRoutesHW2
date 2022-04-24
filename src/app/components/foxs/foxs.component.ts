import { Component, OnInit } from '@angular/core';
import { ImgsService } from 'src/app/services/imgs.service';


@Component({
  selector: 'app-foxs',
  templateUrl: './foxs.component.html',
  styleUrls: ['./foxs.component.css']
})
export class FoxsComponent implements OnInit {

  photos3:any = [];
  constructor(private photo3:ImgsService) {
    this.photo3.getPhotos3().subscribe((somePhoto)=> {
      this.photos3 =somePhoto;
    })
   }

  ngOnInit() {
  }

}
