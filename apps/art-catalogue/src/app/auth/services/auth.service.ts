import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { from } from 'rxjs';
import { timer } from 'ngx-custom-decorators';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(public afAuth: AngularFireAuth) {

    }

    getUser() {
        return this.afAuth.user;
    }

    // @timer()
    login(email, password) {
        return from(this.afAuth
            .auth
            .signInWithEmailAndPassword(email, password));
    }

}
