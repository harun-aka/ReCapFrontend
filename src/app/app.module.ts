import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms'; //[(ngModule)] kullanabilmek için ekledik.
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { RentalDetailDtoComponent } from './components/rental-detail-dto/rental-detail-dto.component';
import { CustomerDetailDtoComponent } from './components/customer-detail-dto/customer-detail-dto.component';
import { FilterPipeBrandPipe } from './pipes/filter-pipe-brand.pipe';
import { FilterPipeColorPipe } from './pipes/filter-pipe-color.pipe';
import { FilterPipeCarPipe } from './pipes/filter-pipe-car.pipe';
import {DatePipe} from '@angular/common';

import {ToastrModule} from 'ngx-toastr';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatCommonModule} from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    BrandComponent,
    CarComponent,
    ColorComponent,
    CustomerComponent,
    RentalComponent,
    RentalDetailDtoComponent,
    CustomerDetailDtoComponent,
    FilterPipeCarPipe,
    FilterPipeBrandPipe,
    FilterPipeColorPipe,
    CarDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }),
    BrowserAnimationsModule,
    MatCommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    
  ],
  providers: [DatePipe,
    MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
