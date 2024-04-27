import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CodeInputModule } from 'angular-code-input';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { MaterialsModule } from "./materials.module";
import { BookRoutingModule } from "./features/book/book-routing.module";

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from "./core/login/login.component";
import { RegisterComponent } from './core/register/register.component';
import { ActivateAccountComponent } from './core/activate-account/activate-account.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ActivateAccountComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialsModule,
    HttpClientModule,
    CodeInputModule,
    BookRoutingModule,
  ],
  providers: [
    provideAnimationsAsync(),
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
