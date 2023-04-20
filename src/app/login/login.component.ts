import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService, User } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });


  constructor(
    private readonly _authService: AuthService,
    private readonly _router: Router
  ) { }


  login() {
    const userForm: any = this.loginForm.getRawValue();
    const exists = this._authService.login(userForm)
    if (exists) {
       this._router.navigate(['/playlist']);
    } else {
      // TODO MANAGE ERROR MESSAGE
    }

  }
}
