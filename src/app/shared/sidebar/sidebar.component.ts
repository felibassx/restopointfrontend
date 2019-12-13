import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { UserModel } from '../../models/user.model';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  user: UserModel;
  menus: any[] = [];

  constructor(
    public _sidebar: SidebarService,
    public _userService: UserService,
    public _authService: AuthService
    ) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.menus = this.user.menu;
  //   this._sidebar.getMenuInfo().subscribe((menus: any) => {

  //     console.log(menus);
  //     this.menus = menus;
  //   });
  // }
  }

}
