import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-world-info',
  templateUrl: './world-info.component.html',
  styleUrls: ['./world-info.component.css']
})
export class WorldInfoComponent {
  @Input() name = ' ';
  @Input() capital = ' ';
  @Input() region = ' ';
  @Input() income = ' ';
  @Input() longitude = ' ';
  @Input() latitude = ' ';
  
  constructor() {
  
  }
}
