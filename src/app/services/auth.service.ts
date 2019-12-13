import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from '../config/config';
import { UserModel } from '../models/user.model';
import { map, catchError } from 'rxjs/operators';
import { empty } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: UserModel;
  token: string;
  menu: any[] = [];

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }


  // ***********************************************************************/
  // Login
  // ***********************************************************************/
  login( rut: string, password: string, remember: boolean = false ) {

    // Primero limpiar el storage
    this.cleanStorage();

    // Opcion recordar el rut del usuario
    if ( remember ) {
      localStorage.setItem( 'rut',  rut );
    } else {
      localStorage.removeItem( 'rut' );
    }

    // URL al servico del backend
    const url = URL_SERVICES + 'login';

    return this.httpClient.get( url )
      .pipe(
        map( (resp: any) => {

          // TEST: para pruebas
          const i = 0;
          // almacenar en el storage los datos del usuario logeado

          // TEST: Prueba
          this.setStorage( resp[i]._id, resp[i].token, resp[i].user );

          // Get Menu por ROLE Usuario

          // this.setStorage( resp._id, resp.token, resp.user );
          return true;

        }),
        catchError((err, caught) => {

          // console.log(err.error.mensaje);
          // swal('Error al autenticar', err.error.mensaje, 'error');
          // tslint:disable-next-line: deprecation
          return empty();
        })
      );
  }

  // ***********************************************************************/
  // Logout
  // ***********************************************************************/
  logout() {

    // Limpiar el storage
    this.cleanStorage();
    this.router.navigate(['/login']);
    // window.location.assign('/login');

  }

  setStorage(id: string, token: string, user: UserModel ) {

    localStorage.setItem( 'id', id );
    localStorage.setItem( 'token', token );
    localStorage.setItem( 'user', JSON.stringify(user));
    // localStorage.setItem( 'menu', JSON.stringify(menu));

    this.user = user;
    this.token = token;
    // this.menu = menu;

  }

  cleanStorage() {

    this.user = null;
    this.token = '';
    // this.menu = [];

    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('id');
    // localStorage.removeItem('menu');
  }

}
