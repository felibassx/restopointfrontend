import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PAGES_ROUTES } from './pages.routes';
import { SupportComponent } from './support/support.component';



@NgModule({
  declarations: [
    HomeComponent,
    SupportComponent
  ],
  exports: [
    HomeComponent,
    SupportComponent
  ],
  imports: [
    CommonModule,
    PAGES_ROUTES,
    FormsModule
  ]
})
export class PagesModule { }
