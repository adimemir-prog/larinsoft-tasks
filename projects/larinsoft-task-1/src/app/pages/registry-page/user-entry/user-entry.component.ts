import { Component, Input, ViewChild } from '@angular/core';
import { CloneUser, User } from '../../../user';
import { ContactService } from '../../../services/contact.service';
import { EditFormComponent } from './edit-form/edit-form.component';

 
@Component({
  selector: 'app-user-entry',
  templateUrl: './user-entry.component.html',
  styleUrls: ['./user-entry.component.scss']
})
export class UserEntryComponent {
  @Input() user : User = new User();
  @ViewChild(EditFormComponent) editFormComponent : EditFormComponent;
  
  user_display = new User(this.displayed_first_name, this.displayed_last_name, this.displayed_telephone_number, this.displayed_email);

  constructor(protected contactService: ContactService) {
    
  }

  onClickDelete() {
    console.log("clicked delete");
    this.contactService.deleteUser(this.user);
  }

  onClickEdit() {
    console.log("clicked edit");
    if (this.editFormComponent.is_visible) this.editFormComponent.resetState()
    this.editFormComponent.is_visible = !this.editFormComponent.is_visible;
  }
  
  get displayed_first_name() {
    if(this.user.first_name === "") return "EMPTY";

    return this.user.first_name;
  }

  get displayed_last_name() {
    if(this.user.last_name === "") return "EMPTY";

    return this.user.last_name;
  }

  get displayed_telephone_number() {
    if(this.user.telephone_number === "") return "EMPTY";

    return this.user.telephone_number;
  }
  
  get displayed_email() {
    if(this.user.email === "") return "EMPTY";

    return this.user.email;
  }

  
} // UserEntryComponent


