import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DogsComponent } from './components/dogs/dogs.component';
import { CatsComponent } from './components/cats/cats.component';
import { FoxsComponent } from './components/foxs/foxs.component';
import { Routes,RouterModule } from '@angular/router';
import{HttpClientModule} from '@angular/common/http';


const appRoutes:Routes =[
  {path:'',component:DogsComponent},
  {path:'dogs',component:DogsComponent},
  {path:'cats',component:CatsComponent},
  {path:'fox',component:FoxsComponent}


]

@NgModule({
  declarations: [
    AppComponent,
    DogsComponent,
    CatsComponent,
    FoxsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
