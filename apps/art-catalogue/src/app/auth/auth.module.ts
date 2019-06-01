import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    AuthService
  ]

})
export class AuthModule {
}
