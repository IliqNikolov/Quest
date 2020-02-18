import { Component, OnInit,Input } from '@angular/core';
import {Router} from '@angular/router'; 
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() 
  user : string
 // user=localStorage.getItem('username')
  menuChar='&#9776'
  Logout()
  {
    this.userservice.Logout()
  }

  constructor(private router: Router,private userservice : UserServiceService) { }

  ngOnInit() {
  }

}
