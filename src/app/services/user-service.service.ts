import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IUser } from '../Interfaces/user';
import { IChangePassword } from '../Interfaces/change-password';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient,private cookieService:CookieService,private router :Router) { }

  private UserApiUrl : string ="https://localhost:44383/api/User";

  RegisterUser (user : IUser)
  {
    return this.http.post(`${this.UserApiUrl}/Register`,user/*,{withCredentials:true}*/);
  }
  LoginUser(user : IUser)
  {   
    return this.http.post(`${this.UserApiUrl}/Login`,user/*,{withCredentials:true}*/);
  }
  ChagePassword(password : IChangePassword)
  {
    return this.http.post(`${this.UserApiUrl}/Changepassword`,password,{withCredentials:true});
  }
  Logout()
  {
    this.cookieService.delete("user")
    this.router.navigate(['/login'])    
    localStorage.removeItem("username");
  }
  Login(user : string,token : string)
  {    
    localStorage.setItem("username",user);
    this.cookieService.set("user",token);
    this.router.navigate(['/'])
  }
  IsLoggedin() :boolean
  {
    if(this.cookieService.get("user") && localStorage.getItem("username"))
    {
      return true;
    }
    return false;
  }
}
