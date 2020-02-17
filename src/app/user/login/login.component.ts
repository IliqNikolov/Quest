import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'; 
import { UserServiceService } from 'src/app/services/user-service.service';
import { User } from 'src/app/Interfaces/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userService : UserServiceService,private router: Router) { }

  private loginFailFlag=false;

  Login(data : User)
  {
    let token;
    this.userService.LoginUser(data).subscribe((resp : any) => {
      token=resp.token;  
      this.userService.Login(data.Username,token);
      this.loginFailFlag=false;
   },error=>{
     console.log(error.status);
     this.loginFailFlag=true;
    }
   );
  }

 
  ngOnInit() {
  }

}
