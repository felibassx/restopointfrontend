import { Component } from '@angular/core';
import { IUser } from './interfaces/IUser.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'punto-v';

  usuarios: IUser[] = [];

  constructor(
   ) {
   }

}
