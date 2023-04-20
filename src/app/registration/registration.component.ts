import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalStorageServiceService } from '../local-storage-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registrationForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(
    private readonly localStorageService: LocalStorageServiceService,
    private readonly router: Router
  ) { }


  register() {
    if (this.registrationForm.valid) {
      const newUser = this.registrationForm.getRawValue()
      const users = this.localStorageService.getItem('users') || [];
      const existingUser = users.some((u: any) => u.login == newUser.login);
      if (existingUser) {
        alert('Cet utilisateur existe déjà ');
        return;
      }
      users.push(newUser);
      this.localStorageService.setItem('users', users);
      this.registrationForm.reset();
      this.router.navigate(['/login']);
    }

  }

}
