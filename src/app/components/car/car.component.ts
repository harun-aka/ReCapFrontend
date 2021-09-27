import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand/brand.service';
import { CarService } from 'src/app/services/car/car.service';
import { ColorService } from 'src/app/services/color/color.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:CarDetailDto[] = [];
  brands:Brand[];
  colors:Color[];
  brandToFilter:Brand;
  colorToFilter:Color;
  dataLoaded = false;
  filterText = "";

  constructor(private carService:CarService, 
    private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService,
    private brandService:BrandService,
    private colorService:ColorService) { }

  ngOnInit(): void {
    this.getBrands();
    this.getColors();
    this.activatedRoute.params.subscribe((params) => {
      if(params["colorId"] && params["brandId"]){
        this.getCarsByBrandAndColor(params["brandId"], params["colorId"])
        console.log(params["brandId"]+"+"+params["colorId"]);
      }
      else if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
        console.log(params["brandId"]);
      }
      else if(params["colorId"]){
        this.getCarsByColor(params["colorId"])
        console.log(params["colorId"]);
      }     
      else{
        this.getCarsWithDetails();
        console.log("Boş");
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

  rentCar(car:CarDetailDto){
    this.toastrService.success("Kiralandı", car.carName);
  }

  getBrands(){
    this.brandService.getBrands().subscribe((response)=>{
      this.brands = response.data;
      this.brandToFilter = this.brands[0];
    })
  }

  getColors(){
    this.colorService.getColors().subscribe((response)=>{
      this.colors = response.data;
      this.colorToFilter = this.colors[0];
    })
  }

  setBrand(brand:Brand){
    this.brandToFilter = brand;
  }

  setColor(color:Color){
    this.colorToFilter = color;
  }

  getCarsByFilterButton(){
    this.getCarsByBrandAndColor(this.brandToFilter.id, this.colorToFilter.id);
  }

}
