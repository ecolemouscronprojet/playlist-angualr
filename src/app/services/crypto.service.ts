import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, repeat } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  private _api: string = 'https://data.binance.com/api/v3';
  constructor(
    private readonly _http: HttpClient
  ) { }

  getAll(): Observable<any> {
    return this._http.get(`${this._api}/ticker/24hr`);
    // .pipe(
    //   repeat({delay: 2000})
    // )
  }

}
