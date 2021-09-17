import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailDtoService {

  private apiUrl = 'https://localhost:44378/api/Cars/getcardetails';

  constructor(private httpClient: HttpClient) {}

  getCarsWithDetails(): Observable<ListResponseModel<CarDetailDto>> {
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(this.apiUrl); //Buna subscribe olmak isteyen component aslında. Servisin görüntüsü bu olması gerekiyor.
  }
}
