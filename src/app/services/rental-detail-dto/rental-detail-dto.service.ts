import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalDetailDtoResponseModel } from 'src/app/models/rentalDetailDtoResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalDetailDtoService {

  private apiUrl = 'https://localhost:44378/api/Rentals/getrentaldetails';

  constructor(private httpClient: HttpClient) {}

  getRentalsWithDetails(): Observable<RentalDetailDtoResponseModel> {
    return this.httpClient.get<RentalDetailDtoResponseModel>(this.apiUrl); //Buna subscribe olmak isteyen component aslında. Servisin görüntüsü bu olması gerekiyor.
  }
}
