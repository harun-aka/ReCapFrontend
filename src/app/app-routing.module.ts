import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { RentalComponent } from './components/rental/rental.component';

const routes: Routes = [
  {path:"", pathMatch:"full", component:CarComponent},
  {path:"car", component:CarComponent},
  {path:"car/brand/:brandId", component:CarComponent},
  {path:"car/color/:colorId", component:CarComponent},
  {path:"car/:brandId&:colorId", component:CarComponent},
  {path:"car/detail/:carId", component:CarDetailComponent},
  {path:"rental/:carId", component:RentalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
