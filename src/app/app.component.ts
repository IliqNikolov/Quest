import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user : string ;//="toster";
  title = 'Quest';

  constructor ()
  {
    this.GetUser();
  }

  GetUser()
  {
    this.user=localStorage.getItem("username");
  }
}
