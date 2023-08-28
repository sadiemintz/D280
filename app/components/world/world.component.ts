import { Component, Output, EventEmitter} from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent {
 
  @Output() name = new EventEmitter();
  @Output() capital = new EventEmitter();
  @Output() region = new EventEmitter();
  @Output() income = new EventEmitter();
  @Output() longitude = new EventEmitter();
  @Output() latitude = new EventEmitter();
 
  constructor(private apiService: ApiService){ }

   ngOnInit(): void {

   }

   onClick(event: MouseEvent){
    const target = event.target as SVGElement;
    const countryId = target.id;

    this.apiService.getAips(countryId).subscribe((info:any) => {
    let data = info[1][0]
    
    this.name.emit(data.name);
    this.capital.emit(data.capitalCity);
    this.region.emit(data.region.value);
    this.income.emit(data.incomeLevel.value);
    this.longitude.emit(data.longitude);
    this.latitude.emit(data.latitude);
  });
}
}
