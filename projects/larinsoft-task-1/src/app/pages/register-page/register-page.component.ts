import { Component, ViewChild } from '@angular/core';
// import {Regi}
import { UserEntryComponent } from './user-entry/user-entry.component';
import { UserEntryListComponent } from './user-entry-list/user-entry-list.component';
import { ContactService } from '../../services/contact.service';
// import

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {
  @ViewChild(UserEntryListComponent) UserEntryList : UserEntryListComponent;
  //

  constructor(private contactService: ContactService) {
    
  }
  
}
