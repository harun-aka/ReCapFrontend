import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/car';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private apiUrl = 'https://localhost:44378/api/';

  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'Cars/getall';
    return this.httpClient.get<ListResponseModel<Car>>(newPath); //Buna subscribe olmak isteyen component aslında. Servisin görüntüsü bu olması gerekiyor. 
  }

  getCarsWithDetails(): Observable<ListResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + 'cars/getcardetails';
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath); //Buna subscribe olmak isteyen component aslında. Servisin görüntüsü bu olması gerekiyor.
  }
  
  getCarsByBrand(brandId:number): Observable<ListResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + 'cars/getcardetails?brandId=' + brandId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath); //Buna subscribe olmak isteyen component aslında. Servisin görüntüsü bu olması gerekiyor.
  }

  getCarsByColor(colorId:number): Observable<ListResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + 'cars/getcardetails?colorId=' + colorId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath); //Buna subscribe olmak isteyen component aslında. Servisin görüntüsü bu olması gerekiyor.
  }

  getCarsByBrandAndColor(brandId:number, colorId:number): Observable<ListResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + 'cars/getcardetails?brandId=' + brandId + '&' + 'colorId' + colorId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath); //Buna subscribe olmak isteyen component aslında. Servisin görüntüsü bu olması gerekiyor.
  }
}
