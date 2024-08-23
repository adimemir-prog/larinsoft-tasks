import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { UserEntryComponent } from '../user-entry/user-entry.component';
import { User } from '../../../user';
import { ContactService } from '../../../services/contact.service';

@Component({
  selector: 'app-user-entry-list',
  templateUrl: './user-entry-list.component.html',
  styleUrls: ['./user-entry-list.component.scss']
})
export class UserEntryListComponent implements OnInit {
  users: User[] = [];
  @Input() user_add_event_emitter : EventEmitter<User>;

  constructor(protected contactService : ContactService) {
    
  }

  ngOnInit() : void {
    // this.users = this.contactService.users;
    // this.contactService.getUsers().subscribe((users) => this.users = users);
    // this.startProcedure();
  }

  startProcedure() {
    // new Promise(async ()=>this.contactService.doSubscription()).then(async ()=>this.updateUsers());
    // new Promise(()=>this.contactService.doSubscription()).then();
    // this.updateUsers();
    
    // this.contactService.doSubscription()
    // this.updateUsers()

    // let first  = () => {this.contactService.doSubscription()};
    // let second = () => {this.updateUsers()}
    // onetwo(first, second);
  }

  updateUsers() {
    // this.users = this.contactService.getUsers();
  }
  
} // UserEntryListComponent

function onetwo(one : Function, two : Function) {
  let funcs = [one,two];
  for (let func of funcs) {
    func();
  }
}
