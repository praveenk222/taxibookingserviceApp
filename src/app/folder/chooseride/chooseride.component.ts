import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, Marker } from '@capacitor/google-maps';
import { Geolocation, GeolocationPlugin } from '@capacitor/geolocation';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonContent } from '@ionic/angular';
// import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-chooseride',
  templateUrl: './chooseride.component.html',
  styleUrls: ['./chooseride.component.scss'],
})
export class ChooserideComponent  implements OnInit {

  lati :any;
  longi:any;
  loc:any;
  Data:any;
  pincodeForm!:FormGroup;
  useraddress:any=null;
  items: any;
  constructor(private http:HttpClient,private pf:FormBuilder) { 

    this.pincodeForm=this.pf.group({
     code:''
    })
  }

  ngOnInit() {
    this.printCurrentPosition()
    this.createMap();
    // const items = [];
    // for (let i = 1; i < 6; i++) {
    //   this.items.push(`Item ${i}`);
    // }
    
  }
  ionViewDidEnter()
  {
    
  }
  apiKey = 'AIzaSyCU4W4iQLV5ydrW3UxZncI_JdLi1EsKH5A';

  @ViewChild('map', {static: true})
   mapRef!: ElementRef<HTMLElement>;
   newMap!: GoogleMap
   async createMap() {
 
    this.newMap = await GoogleMap.create({
      id: 'my-cool-map',
      element: this.mapRef.nativeElement,
      apiKey: this.apiKey,
      config: {
        center: {
          
          lat:  15.500560,
          lng: 80.056600,
        },
        zoom: 8,
      },
    });
  this.markerId()
  }
  markerId(){
  const markers:Marker[]=[
 //   {
 //   coordinate: {
 //     lat: 15.500560,
 //     lng: 80.056600
 //   },
 //   title:'mylocation'
 
  // }
]
const result=  this.newMap.addMarkers(markers);
this.newMap.setOnMarkerClickListener(async (marker:any)=>{
   console.log(marker)
})
}

printCurrentPosition() {

var coordinates = Geolocation.getCurrentPosition().then((resp) => {
  this.lati = resp.coords.latitude;
  this.longi = resp.coords.longitude;
  console.log(this.lati);
  console.log(this.longi)
  this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.lati},${this.longi}&key=AIzaSyCU4W4iQLV5ydrW3UxZncI_JdLi1EsKH5A`).subscribe((res:any)=>{
      this.loc=res['plus_code']  
      console.log(res.results[0].formatted_address)
      console.log(res.results[8].formatted_address)
      this.useraddress=res.results[8].formatted_address
  
      console.log(res)
      })
   //hide for now for same lati and longi getting 
    // this.getNearByHubs()
  })

console.log(coordinates)
};
@ViewChild(IonContent) content!: IonContent;

scrollToBottom() {
  
  this.content.scrollToBottom(500);
}

scrollToTop() {
  // Passing a duration to the method makes it so the scroll slowly
  // goes to the top instead of instantly
  this.content.scrollToTop(500);
}


}
