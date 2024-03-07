import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fare',
  templateUrl: './fare.component.html',
  styleUrls: ['./fare.component.scss'],
})
export class FareComponent  implements OnInit {
  imgUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSguNwI8rwgzhOlFDXuwXpefieD5Fom6J0zmSdbrGNzQW6urkLS8Fl95oVGi_WYvdMQyHc&usqp=CAU';
  options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
   
    
  ];
  

  constructor() { }

  ngOnInit() {}

}
