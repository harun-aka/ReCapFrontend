import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailDtoResponseModel } from 'src/app/models/carDetailDtoResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailDtoService {

  private apiUrl = 'https://localhost:44378/api/Cars/getcardetails';

  constructor(private httpClient: HttpClient) {}

  getCarsWithDetails(): Observable<CarDetailDtoResponseModel> {
    return this.httpClient.get<CarDetailDtoResponseModel>(this.apiUrl); //Buna subscribe olmak isteyen component aslında. Servisin görüntüsü bu olması gerekiyor.
  }
}
