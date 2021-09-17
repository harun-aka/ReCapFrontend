import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { RentalDetailDto } from 'src/app/models/rentalDetailDto';

@Injectable({
  providedIn: 'root'
})
export class RentalDetailDtoService {

  private apiUrl = 'https://localhost:44378/api/Rentals/getrentaldetails';

  constructor(private httpClient: HttpClient) {}

  getRentalsWithDetails(): Observable<ListResponseModel<RentalDetailDto>> {
    return this.httpClient.get<ListResponseModel<RentalDetailDto>>(this.apiUrl); //Buna subscribe olmak isteyen component aslında. Servisin görüntüsü bu olması gerekiyor.
  }
}
