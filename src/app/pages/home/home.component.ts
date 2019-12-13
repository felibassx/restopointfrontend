import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserModel } from '../../models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  users: UserModel[] = [];

  constructor(
    public _userService: UserService
   ) {
     this._userService.getUsersInfo()
       .subscribe((users: UserModel[])  => {
          this.users = users;
       });
   }

  ngOnInit() {
  }

}
