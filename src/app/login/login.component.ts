import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService, User } from '../services/auth.service';

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
    private _authService: AuthService
  ) { }


  login() {
    const userForm: any = this.loginForm.getRawValue();
    const exists = this._authService.login(userForm)
    console.log(exists);
  }
}
