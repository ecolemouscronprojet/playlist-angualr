import { Injectable } from '@angular/core';
import { LocalStorageServiceService } from '../local-storage-service.service';

export interface Login {
  login: string,
  password: string,
}

export interface User {
  firstName: string,
  lastName: string,
  login: string,
  password: string,
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _users: any[] = [];
  private _currentUser: User | null;

  set currentUser(value: User | null) {
    this._currentUser = value;
    if(value){
      this.localStorageService.setItem('currentUser', value);
    } else {
      this.localStorageService.removeItem('currentUser'); 
    }
  }

  constructor(
    private readonly localStorageService: LocalStorageServiceService
  ) {
    this._users = this.localStorageService.getItem('users') || [];
    this._currentUser = this.localStorageService.getItem('currentUser');
  }

  disconnect() {
    this.currentUser = null;
  }

  // IMPLEMENTER UN TTL POUR DECONNECETER L UTILISATEUR

  isAuthenticated(): boolean {
    return this._currentUser != null;
  }

  login(user: Login): boolean {
    const _user: User | undefined = this._users
      .find((u: any) => u.login === user.login && u.password === user.password);

    if (!_user) {
      return false;
    }

    this.currentUser = _user;

    return true;
  }

}
