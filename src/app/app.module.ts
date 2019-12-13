import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServiceModule } from './services/services.module';
import { PagesComponent } from './pages/pages.component';
import { APP_ROUTES } from './app.routes';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ServiceModule,
    SharedModule,
    APP_ROUTES,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
