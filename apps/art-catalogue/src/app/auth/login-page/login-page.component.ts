import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import 'reflect-metadata';
import { environment } from '@art-catalogue/env/environment';

@Component({
    selector: 'art-catalogue-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
    public authForm: FormGroup;
    public env = environment.mainTitle;

    constructor(private fb: FormBuilder,
                private authService: AuthService) {
    }

    ngOnInit() {
        this.authForm = this.fb.group({
            email: [],
            password: []
        });
    }

    submit() {
        this.authService.login(this.authForm.controls['email'].value, this.authForm.controls['password'].value)
            .subscribe((resp) => console.log(resp));
    }

}
