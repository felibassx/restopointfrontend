import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from '../config/config';
import { Router } from '@angular/router';
import { UserModel } from '../models/user.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  menu: any[] = [];

  constructor(
    private readonly httpClient: HttpClient,
    private router: Router
  ) { }

  getUsersInfo(): Observable<any> {

    const url = URL_SERVICES + 'users_data';
    return this.httpClient.get(url);

  }



  // logout() {
  //   // this.limpiarStorage();
  //   this.router.navigate(['/login']);
  //   // window.location.assign('/login');
  // }

}
