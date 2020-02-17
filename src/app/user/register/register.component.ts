import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
import { UserRegistration } from 'src/app/Interfaces/user-registration';
import {Router} from '@angular/router'; 


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private userService : UserServiceService, private router: Router) { }
  private usernameAlreadyExistsFlag=false;

  Register (data : UserRegistration)
  {
    let token;
    this.userService.RegisterUser(data).subscribe((resp : any) => {
      token=resp.token;  
      this.userService.Login(data.Username,token);
      this.usernameAlreadyExistsFlag=false;
   },error=>{
     console.log(error.status);
     this.usernameAlreadyExistsFlag=true;
    }
   );
   
  }

  ngOnInit() {
  }

}
