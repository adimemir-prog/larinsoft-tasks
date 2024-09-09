import { Component, Input, OnInit, ViewChildren } from '@angular/core';
import { ContactService } from 'projects/larinsoft-task-1-UI/src/app/services/contact.service';
import { User } from 'projects/larinsoft-task-1-UI/src/app/classes/user';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit{
  @Input() orig_user : User;
  user : User = new User();
  is_visible : boolean = false;
  state_msg  = ""; should_display_state_msg : boolean;
  result_msg = ""; should_display_result_msg = false;
  // @Output() clickEditCheckEvent

  constructor(protected contactService : ContactService) {
    // this.user = this.user.clone(); // so that editing input don't affect original view.
    
  }

  ngOnInit() {
    this.resetState();
    this.regulateMsg();
  }

  regulateMsg() {
    this.should_display_state_msg = !(this.user.all_is_valid);
  }

  onClickEditCheck() {
    // let  : boolean;
    console.log("Tried to edit with this user:",this.user);
    let is_success = this.contactService.editUser(this.user);
    if (is_success) this.is_visible = false;
    else {
      this.result_msg = "The edit attempt failed."
      this.should_display_result_msg = true;
      setTimeout(()=>{this.should_display_result_msg=false}, 700);
    }
    
  }

  resetState() {
    this.user.id = this.orig_user.id;
    this.user.first_name = this.orig_user.first_name;
    this.user.last_name = this.orig_user.last_name;
    this.user.telephone_number = this.orig_user.telephone_number;
    this.user.email = this.orig_user.email;
  }
  
}
