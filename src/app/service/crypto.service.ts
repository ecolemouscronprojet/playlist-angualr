import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, repeat } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor(
    private readonly _http: HttpClient
  ) { }


  getAll(): Observable<any> {
    return this._http.get('https://data.binance.com/api/v3/ticker/24hr')
    // .pipe(
    //   repeat({delay: 10000})
    // )
  }
}
