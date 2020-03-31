import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthService } from './services/auth.service';
import { authRoutes } from './auth.routes';
import { SharedModule } from '../shared/shared.module';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
    declarations: [
        LoginPageComponent
    ],
    imports: [
        authRoutes,
        CommonModule,
        SharedModule,
    ],
    providers: [
        AuthService,
        // AngularFireAuth
    ],
})
export class AuthModule {
}
