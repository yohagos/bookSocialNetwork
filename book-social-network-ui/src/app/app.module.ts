import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { MaterialsModule } from "./materials.module";

import { AppComponent } from './app.component';
import { LoginComponent } from "./core/login/login.component";
import { RegisterComponent } from './core/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialsModule,
    HttpClientModule
  ],
  providers: [
    provideAnimationsAsync(),
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
