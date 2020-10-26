import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiRandomusersService {

  constructor(private https: HttpClient) { }

  callApi(quantity: string): any {
    return this.https.get(`https://randomuser.me/api/?results=${quantity}`);
  }

}

export interface Users {
  name: string
}