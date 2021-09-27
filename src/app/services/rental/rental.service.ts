import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from 'src/app/models/rental';
import { ResponseModel } from 'src/app/models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  private apiUrl = 'https://localhost:44378/api/';

  constructor(private httpClient: HttpClient) {}
  
  rentCar(rental:Rental) :Observable<ResponseModel> {
    let newPath = this.apiUrl + 'rentals/add';
    return this.httpClient.post<ResponseModel>(newPath,rental); //Buna subscribe olmak isteyen component aslında. Servisin görüntüsü bu olması gerekiyor.
  }

  checkout(){
    let newPath = this.apiUrl + 'rentals/checkout';
    return this.httpClient.post(newPath,"");
  }
}
