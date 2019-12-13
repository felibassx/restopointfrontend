import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeDbService } from '../fakeDB/fakeDb.service';
import { SidebarService } from './sidebar.service';
import { AuthService } from './auth.service';

@NgModule({
    declarations: [],
    providers: [
      UserService,
      SidebarService,
      AuthService
    ],
    imports: [
      CommonModule,
      HttpClientModule,
      InMemoryWebApiModule.forRoot(FakeDbService, {
        delay             : 0,
        passThruUnknownUrl: true
    }),
    ]
  })
  export class ServiceModule { }