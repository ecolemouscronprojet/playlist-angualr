import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageServiceService {
  private _totalAlbumsSubjet: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  constructor() { }

  setTotalAlbums(total: number) {
    this._totalAlbumsSubjet.next(total);
  }

  getTotalAlbums() {
    return this._totalAlbumsSubjet.asObservable();
  }


  setItem(key: string, value: any): void {
    if (value != null) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (err) {
        console.error('Impossible to save in local storage');
      }
    }
  }

  getItem(key: string): any {
    const storeValue = localStorage.getItem(key);
    if (storeValue) {
      return JSON.parse(storeValue);
    }
    return null;
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }

  hasKey(key: string): boolean {
    return localStorage.getItem(key) !== null
  }

}
