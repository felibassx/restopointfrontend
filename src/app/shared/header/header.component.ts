import { Component, OnInit } from '@angular/core';
// import { UsuarioService } from '../../services/services.index';
// import { Usuario } from '../../models/usuario.model';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserModel } from '../../models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  user: UserModel;
  constructor(
    // tslint:disable-next-line: variable-name
    public _authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  buscar( termino: string ) {
    // this.router.navigate(['/busqueda', termino]);
  }

}
