import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalStorageServiceService } from '../local-storage-service.service';

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
    private readonly localStorageService: LocalStorageServiceService
  ) { }


  login() {
    const users = this.localStorageService.getItem('users') || [];
    const userForm = this.loginForm.getRawValue();
    const currentUser = users
    .find((u: any) => u.login = userForm.login && u.password === userForm.password);
  }
}
