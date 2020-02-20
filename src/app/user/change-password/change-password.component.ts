import { Component, OnInit } from '@angular/core';
import { IChangePasswordLong } from 'src/app/Interfaces/change-password-long';
import { UserServiceService } from 'src/app/services/user-service.service';
import {Router} from '@angular/router'; 

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private userService : UserServiceService,private router :Router) { }

  WrongPasswordFlag :boolean;

  ChangePassword(data : IChangePasswordLong)
  {
    this.userService.ChagePassword(data).subscribe((resp : any) => {  
      this.router.navigate(['/'])
   },error=>{
     if(error.status==401)
     {
       this.userService.Logout();
     }
     this.WrongPasswordFlag=true;
     }
   );
  }

  ngOnInit() {
  }

}
