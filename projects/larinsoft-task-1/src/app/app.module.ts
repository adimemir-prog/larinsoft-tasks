import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
// import { FilterMatchMode, PrimeNGConfig } from 'primeng/api';

import { ButtonModule } from "primeng/button";
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LabeledInputComponent } from './labeled-input/labeled-input.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { UserEntryComponent } from './pages/register-page/user-entry/user-entry.component';
import { UserEntryListComponent } from './pages/register-page/user-entry-list/user-entry-list.component';
import { SubmitResultMessageComponent } from './pages/login-page/submit-result-message/submit-result-message.component';

import { ContactService } from './services/contact.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LabeledInputComponent,
    RegisterPageComponent,
    UserEntryListComponent,
    UserEntryComponent,
    SubmitResultMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    HttpClientModule
    // FilterMatchMode, PrimeNGConfig
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
