import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  currentColor :Color;
  nullColor : Color;
  colors:Color[] = [];

  constructor(private colorService:ColorService) { }

  ngOnInit(): void {
    this.getColors();
  }

  getColors(){
    this.colorService.getColors()
    .subscribe((response) => {
      this.colors = response.data;
    })
  }

  setCurrentColor(category:Color){
    this.currentColor=category;
  }

  setCurrentColorNull(){
    this.currentColor =this.nullColor;
  }

  getCurrentColorClass(category:Color){
    if(category == this.currentColor){
      return "list-group-item active";
    }
    else{
      return "list-group-item";
    }
      
  }

  getAllColorClass(){
    if(!this.currentColor){
      return "list-group-item active";
    }
    else{
      return "list-group-item";
    }
  }

}
