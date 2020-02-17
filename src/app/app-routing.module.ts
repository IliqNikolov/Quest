import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ChangePasswordComponent } from './user/change-password/change-password.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { FormTestComponent } from './form-test/form-test.component';
import { LogedOutGuard } from './guards/loged-out.guard';
import { LogedInGuard } from './guards/loged-in.guard';
import { CreateComponent } from './quest/create/create.component';
import { HightScoreComponent } from './quest/hight-score/hight-score.component';


const routes: Routes = [
  {
    path: "login", 
    canActivate: [LogedOutGuard],
    component: LoginComponent
  },
  {
    path: "register", 
    canActivate: [LogedOutGuard],
    component: RegisterComponent
  },
  {
    path: "changepassword", 
    canActivate: [LogedInGuard],
    component: ChangePasswordComponent
  },
  {
    path: "create",
    canActivate: [LogedInGuard],
    component: CreateComponent
  },
  {
    path: "score", 
    component: HightScoreComponent
  },
  {
    path: "test",
    component: TestComponent
  },
  {
    path: "form",
    component: FormTestComponent
  },
  {
    path: "", 
    component: HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
