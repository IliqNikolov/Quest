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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestNavComponent } from './test-nav/test-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';


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
    HightScoreComponent,
    TestNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC9f2dMrxrtkho2J2UYnh0HvRjrjKg0Tbk'
    }),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatTabsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
