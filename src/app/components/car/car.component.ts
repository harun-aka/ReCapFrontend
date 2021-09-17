import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { CarService } from 'src/app/services/car/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:CarDetailDto[] = [];
  dataLoaded = false;

  constructor(private carService:CarService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if(params["colorId"] && params["brandId"]){
        this.getCarsByBrandAndColor(params["brandId"], params["colorId"])
      }
      else if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
      }
      else if(params["colorId"]){
        this.getCarsByColor(params["colorId"])
      }     
      else{
        this.getCarsWithDetails();
      }
    })
  }

  getCarsWithDetails(){
    this.carService.getCarsWithDetails()
    .subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    })
  }

  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId)
    .subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    })
  }

  getCarsByColor(colorId:number){
    this.carService.getCarsByColor(colorId)
    .subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    })
  }

  getCarsByBrandAndColor(brandId:number, colorId:number){
    this.carService.getCarsByBrandAndColor(brandId, colorId)
    .subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    })
  }

}
