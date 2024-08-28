import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { ButtonModule } from "primeng/button";
import { InputTextModule } from 'primeng/inputtext';


import { AppComponent } from './app.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LabeledInputComponent } from './labeled-input/labeled-input.component';
import { RegistryPageComponent } from './pages/registry-page/registry-page.component';
import { UserEntryComponent } from './pages/registry-page/user-entry/user-entry.component';
import { UserEntryListComponent } from './pages/registry-page/user-entry-list/user-entry-list.component';
import { SubmitResultMessageComponent } from './pages/register-page/submit-result-message/submit-result-message.component';

import { ContactService } from './services/contact.service';
import { EditFormComponent } from './pages/registry-page/user-entry/edit-form/edit-form.component';
import { EditResultMessageComponent } from './pages/registry-page/edit-result-message/edit-result-message.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistryPageComponent,
    LabeledInputComponent,
    RegisterPageComponent,
    UserEntryListComponent,
    UserEntryComponent,
    SubmitResultMessageComponent,
    EditFormComponent,
    EditResultMessageComponent
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
