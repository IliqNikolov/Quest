import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  latitude = 42.68508331140545;
  longitude = 23.34253094771657;

  cursorLat;
  cursorLon;
  locationChosen=false;
  showMap=false;
  text="Show map"

  constructor() { }

  testclick(event)
  {
    console.log(event);
    this.cursorLat=event.coords.lat;
    this.cursorLon=event.coords.lng;
    this.locationChosen=true;
  }
  clickedRadio()
  {
    if(this.showMap)
    {
      this.showMap=false;
      this.text="Show map"
    }
    else{
      this.showMap=true;
      this.text="Hide map"
    }
  }

  ngOnInit() {
  }

}
