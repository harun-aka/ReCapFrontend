import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerDetailDtoResponseModel } from 'src/app/models/customerDetailDtoResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerDetailDtoService {

  private apiUrl = 'https://localhost:44378/api/Customers/getcustomerdetails';

  constructor(private httpClient: HttpClient) {}

  getCustomersWithDetails(): Observable<CustomerDetailDtoResponseModel> {
    return this.httpClient.get<CustomerDetailDtoResponseModel>(this.apiUrl); //Buna subscribe olmak isteyen component aslında. Servisin görüntüsü bu olması gerekiyor.
  }
}

