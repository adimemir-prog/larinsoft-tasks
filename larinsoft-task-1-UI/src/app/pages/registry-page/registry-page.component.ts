import { Component, ViewChild } from '@angular/core';
// import {Regi}
import { UserEntryComponent } from './user-entry/user-entry.component';
import { UserEntryListComponent } from './user-entry-list/user-entry-list.component';
import { ContactService } from '../../services/contact.service';
// import

@Component({
  selector: 'app-registry-page',
  templateUrl: './registry-page.component.html',
  styleUrls: ['./registry-page.component.scss']
})
export class RegistryPageComponent {
  @ViewChild(UserEntryListComponent) UserEntryList : UserEntryListComponent;
  //

  constructor(protected contactService: ContactService) {
    contactService.updateServiceData();
  }
  
}
