import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConvertService {
  constructor(private http: HttpClient) {}

  getConvert(from: string, to: string, amount: number) {
    return this.http.get(
      ` https://api.getgeoapi.com/v2/currency/convert?api_key=bf523fb044a11114964daa3d15169f601afc4eca&from=${from}&to=${to}&amount=${amount}` //TODO: Положить в .env файл
    );
  }
}
