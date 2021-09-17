import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';

const routes: Routes = [
  {path:"", pathMatch:"full", component:CarComponent},
  {path:"cars", component:CarComponent},
  {path:"cars/getcarsbyfilters/", component:CarComponent},
  {path:"cars/getcarsbyfilters/:brandId", component:CarComponent},
  {path:"cars/getcarsbyfilters/:colorId", component:CarComponent},
  {path:"cars/getcarsbyfilters/:brandId&:colorId", component:CarComponent},
  {path:"cars/detail/:carId", component:CarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
