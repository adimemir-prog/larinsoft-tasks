import { Component, ViewChild } from '@angular/core';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { User } from './user'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'larinsoft-task-1';
  @ViewChild(RegisterPageComponent) RegisterPage: RegisterPageComponent;

  constructor(private router : Router) {
    
  }

  // tryAddUser(user:User) {
  //   this.RegisterPage.UserEntryList.tryAddUser(user);
  // }

  hasRoute(route: string) {
    this.router.url === route;
  }
  
  // events 
}


