import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    fbUrl = 'https://identitytoolkit.googleapis.com/v1/';

    constructor(private http: HttpClient) {
    }

    login(user): any {
        console.log('login user', user);
        return this.http.post(`${this.fbUrl}accounts:signInWithPassword?key=${environment.apiKet}`, user);
    }
}
