import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fare',
  templateUrl: './fare.component.html',
  styleUrls: ['./fare.component.scss'],
})
export class FareComponent  implements OnInit {
  imgUrl='https://d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/sites/5/2023/05/17102655/taxi-bnr.png';
  options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
   
    
  ];
  

  constructor() { }

  ngOnInit() {}

}
