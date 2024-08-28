import { Component, Directive, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { User } from '../../user';
import { SubmitResultMessageComponent } from './submit-result-message/submit-result-message.component';
import { Router } from '@angular/router';
import { ContactService } from '../../services/contact.service';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  user : User = new User();
  @Output() GotoRegistryEvent = new EventEmitter();
  @Output() AddUserToRegistryEvent = new EventEmitter();

  @ViewChild(SubmitResultMessageComponent) SubmitResultMessage : SubmitResultMessageComponent;

  constructor(private router: Router, protected contactService : ContactService) {
    
  }
   
  ngOnInit(): void {
    // this.listen_email_validity();
  }

  click_is_locked = false;
  async onClickSubmit() {
    console.log("Clicked 'Submit' in Login Page.");
    if(!this.click_is_locked) {
      this.click_is_locked = true;
      console.log("Submit button was UNLOCKED");
      console.log("user is", this.user);
      await new Promise((resolve)=>{this.contactService.tryPostUser(this.user);resolve(0)});
      this.click_is_locked = false;
    }
    else console.log("Submit button was LOCKED");
    return this.user;
  }

  GotoRegistry() {
    // this.GotoRegistryEventEmitter.emit(this.user);
  }

  get_first_name_element() {
    return document.getElementById("login_page_first_name1");    
  }

  get_last_name_element() {
    return document.getElementById("login_page_last_name1");    
  }

  get_telephone_number_element() {
    return document.getElementById("login_page_telephone_number1");
  }

  get_email_element() {
    return document.getElementById("login_page_email1");
  }

  // get is_email_valid() {
  //   let html_element = this.get_email_element();
  //   let candid : string = (<HTMLInputElement>html_element!).value;
  //   // let regex : RegExp = /[a-zA-Z]/;     
  //   let regex : RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   let is_valid = regex.test(candid);

  //   return is_valid;
  // }

  // get is_telephone_number_valid() {
    // let html_element = this.get_email_element();
    // let candid : string = (<HTMLInputElement>html_element!).value;
    // // let regex : RegExp = /[a-zA-Z]/;     
    // let regex : RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // let is_valid = regex.test(candid);

    // return is_valid;
  // }
  

  // private listen_email_validity() {
  //   let html_element = this.get_email_element();
  //   html_element!.addEventListener('change', this.email_validity_procedure);   
  // }

  get first_name_field_is_filled() {
    return this.user.first_name !== "";
  }

  get last_name_field_is_filled() {
    return this.user.last_name !== "";
  }

  get telephone_number_field_is_filled() {
    return this.user.telephone_number !== "";
  }

  get email_field_is_filled() {
    return this.user.email !== "";
  }

  get all_fields_are_filled() {
    let retval = this.first_name_field_is_filled && this.last_name_field_is_filled && this.telephone_number_field_is_filled &&
      this.email_field_is_filled; 
    return retval;
  }

  email_validity_procedure() {
    let html_element = this.get_email_element();
    let candid : string = (<HTMLInputElement>html_element!).value;
    // let regex : RegExp = /[a-zA-Z]/;     
    let regex : RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let is_valid = regex.test(candid);

    return is_valid;
  }

  hasRoute(route: string) {
    this.router.url === route;
  }
  
} // class RegisterPageComponent




