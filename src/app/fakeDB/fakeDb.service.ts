import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { UsersFakeDb } from './userFake';
import { MenuFakeDb } from './menuFake';
import { AuthFakeDB } from './authFake';


@Injectable({
  providedIn: 'root'
})

export class FakeDbService implements InMemoryDbService {

  createDb(): any {
        return {
            users_data: UsersFakeDb.users_data,
            menu_data: MenuFakeDb.menu_data,
            login: AuthFakeDB.login
        };
    }

  // createDb() {
  //   const heroes = [
  //     { id: 1, name: 'Windstorm' },
  //     { id: 2, name: 'Bombasto' },
  //     { id: 3, name: 'Magneta' },
  //     { id: 4, name: 'Tornado' }
  //   ];
  //   return {heroes};
  // }

}
