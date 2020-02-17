import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  get isLoggedin ()
  { 
    return this.userService.IsLoggedin();
  }

  constructor(private userService :  UserServiceService) { }
   

  ngOnInit() {
  }

}
