import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GallaryComponent } from './components/gallary/gallary.component';
import { HomeComponent } from './components/home/home.component';
const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"Gallary",component:GallaryComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
