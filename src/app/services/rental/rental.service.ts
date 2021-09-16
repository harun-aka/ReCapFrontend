import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalResponseModel } from 'src/app/models/rentalResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  // private apiUrl = 'https://localhost:44378/api/Rentals/getall';

  constructor(private httpClient: HttpClient) {}

  // getRentals(): Observable<RentalResponseModel> {
  //   return this.httpClient.get<RentalResponseModel>(this.apiUrl); //Buna subscribe olmak isteyen component aslında. Servisin görüntüsü bu olması gerekiyor.
  // }
}
