import { Component, OnInit } from '@angular/core';
import { CustomerDetailDto } from 'src/app/models/customerDetailDto';
import { CustomerDetailDtoService } from 'src/app/services/customer-detail-dto/customer-detail-dto.service';

@Component({
  selector: 'app-customer-detail-dto',
  templateUrl: './customer-detail-dto.component.html',
  styleUrls: ['./customer-detail-dto.component.css']
})
export class CustomerDetailDtoComponent implements OnInit {

  customers:CustomerDetailDto[] = [];
  dataLoaded = false;

  constructor(private customerService:CustomerDetailDtoService) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(){
    this.customerService.getCustomersWithDetails()
    .subscribe((response) => {
      this.customers = response.data;
      this.dataLoaded = true;
    })
  }

}
