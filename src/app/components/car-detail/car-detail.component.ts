import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car/car.service';
import { CarImageDetailDto } from 'src/app/models/carImageDetailDto';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  carDetail : CarImageDetailDto;
  dataLoaded = false;

  constructor(private carService:CarService,
    private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) =>
    this.getCarDetails(params["carId"]) 
    );
  }

  getCarDetails(carId:number){
    this.carService.getCarDetails(carId)
    .subscribe((response) => {
      this.carDetail = response.data;
      this.dataLoaded = true;
    })
  }

  rentCar(car:CarImageDetailDto){
    this.toastrService.success("Kiralandı", car.carName);
  }
}
