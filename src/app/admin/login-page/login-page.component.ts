import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../shared/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

    form: FormGroup;
    submitted = false;

    constructor(public auth: AuthService, private router: Router) {
    }

    ngOnInit(): void {
        this.form = new FormGroup({
            email: new FormControl('a3931@suprj.ru', [Validators.required, Validators.email]),
            password: new FormControl('123456', [Validators.required, Validators.minLength(6)])
        });
    }

    submit(): void {
        if (this.form.invalid) {
            return;
        }

        this.submitted = true;
        const user = {
            email: this.form.value.email,
            password: this.form.value.password,
            returnSecureToken: true
        };

        this.auth.login(user).subscribe(
            res => {
                console.log(res);
                this.form.reset();
                this.submitted = false;
                this.router.navigate(['/admin', 'dashboard']);
            }, () => {
                this.submitted = false;
            });


    }
}
