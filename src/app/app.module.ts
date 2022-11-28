import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TevasComponent } from './tevas/tevas.component';
import { VaikasComponent } from './vaikas/vaikas.component';

@NgModule({
  declarations: [AppComponent, TevasComponent, VaikasComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
