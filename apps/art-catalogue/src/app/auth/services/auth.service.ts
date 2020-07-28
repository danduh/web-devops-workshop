import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { from } from 'rxjs';
import { timer } from 'ngx-custom-decorators';
import { HttpClient } from '@angular/common/http';
import { environment } from '@art-catalogue/env/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private authUrl = environment.authUrl;

    constructor(private http: HttpClient) {

    }

    getUser() {
        // return this.afAuth.user;
    }

    login(email, password) {
        const url = `${this.authUrl}/auth/login`
        return this.http.post(url, { email, password });
    }


}
