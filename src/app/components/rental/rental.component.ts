import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { Rental } from 'src/app/models/rental';
import { RentalDetailDto } from 'src/app/models/rentalDetailDto';
import { RentalDetailDtoService } from 'src/app/services/rental-detail-dto/rental-detail-dto.service';
import { RentalService } from 'src/app/services/rental/rental.service';


@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  rentalDetailDtos:RentalDetailDto[] = [];
  dataLoaded = false;
  result:boolean;
  resultMessage:string;
  carId:number;
  rentDate:Date;
  returnDate:Date;
  showCheckout = false;

  constructor(private rentalService:RentalService,
    private rentalDetailDtoService:RentalDetailDtoService,
    private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService,
    public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.getRentalsWithDetails();
    this.activatedRoute.params.subscribe((params) =>{
      this.carId = params["carId"];
      console.log(this.carId);
    }
    );
  }

  getRentalsWithDetails(){
    this.rentalDetailDtoService.getRentalsWithDetails()
    .subscribe((response) => {
      this.rentalDetailDtos = response.data;
      this.dataLoaded = true;
    })
  }

  rentCar(){
    let myDate = new Date(); 
    let rental = new Rental();
    rental.carId = this.carId;
    rental.customerId = 1;
    rental.rentDate = moment(this.rentDate).format('YYYY-MM-DDTHH:mm:ss');
    rental.returnDate = moment(this.returnDate).format('YYYY-MM-DDTHH:mm:ss');
    this.rentalService.rentCar(rental).subscribe((response)=>{
      console.log(response.message);
      this.result = response.success;
      this.resultMessage = response.message;
      if(this.result){
        this.toastrService.success("Kiralanabilir.", this.rentalDetailDtos.find(r=>r.carId == rental.carId).brandName);
        this.showCheckout = true
      }
      else{
        this.toastrService.error("Kiralanamaz.");
      }
    })    
  }
  
  checkout(){
    this.rentalService.checkout();
  }

}
