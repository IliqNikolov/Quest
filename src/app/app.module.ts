import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { TestComponent} from './test/test.component'
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { CookieService } from 'ngx-cookie-service';
import { ChangePasswordComponent } from './user/change-password/change-password.component';
import { AgmCoreModule } from '@agm/core';
import { FormTestComponent } from './form-test/form-test.component';
import { CreateComponent } from './quest/create/create.component';
import { ListComponent } from './quest/list/list.component';
import { LoggedinComponent } from './home/loggedin/loggedin.component';
import { LoggedoutComponent } from './home/loggedout/loggedout.component';
import { QuestInfoComponent } from './quest/quest-info/quest-info.component';
import { HightScoreComponent } from './quest/hight-score/hight-score.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    TestComponent,
    ChangePasswordComponent,
    FormTestComponent,
    CreateComponent,
    ListComponent,
    LoggedinComponent,
    LoggedoutComponent,
    QuestInfoComponent,
    HightScoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC9f2dMrxrtkho2J2UYnh0HvRjrjKg0Tbk'
    }),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
