import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerDetailDto } from 'src/app/models/customerDetailDto';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerDetailDtoService {

  private apiUrl = 'https://localhost:44378/api/Customers/getcustomerdetails';

  constructor(private httpClient: HttpClient) {}

  getCustomersWithDetails(): Observable<ListResponseModel<CustomerDetailDto>> {
    return this.httpClient.get<ListResponseModel<CustomerDetailDto>>(this.apiUrl); //Buna subscribe olmak isteyen component aslında. Servisin görüntüsü bu olması gerekiyor.
  }
}

