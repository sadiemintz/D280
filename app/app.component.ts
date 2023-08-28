import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title: string = 'Hello World';

  name:string = '';
  capital:string = '';
  region:string = '';
  income:string = '';
  longitude:string = '';
  latitude:string = '';

  OnNameChange(value:string){
    this.name = value;
  }
  OnCapitalChange(value:string){
    this.capital = value;
  }
  OnRegionChange(value:string){
    this.region = value;
  }
  OnIncomeChange(value:string){
    this.income = value;
  }
  OnlongitudeChange(value:string){
    this.longitude = value;
  }
  OnLatitudeChange(value:string){
    this.latitude = value;
  }

  constructor() { }

}
