import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { URL_SERVICES } from '../config/config';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [];

  constructor(
    private _userService: UserService,
    private httpClient: HttpClient
  ) { }

  getMenuInfo(): Observable<any> {

    const url = URL_SERVICES + 'menu_data';




    return this.httpClient.get(url)
      .pipe(
        map((resp: any) => {
          console.log('MENU ', resp);
        })
      );

  }
}
