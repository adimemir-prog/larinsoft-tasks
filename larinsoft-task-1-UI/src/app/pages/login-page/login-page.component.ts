import { Component } from '@angular/core';
import { UserLoginInfo } from '../../classes/user-login-info';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  userLoginInfo : UserLoginInfo = new UserLoginInfo();
  login_button_is_locked = false;
  onClickLogin() {
    this.login_button_is_locked = true;
    
    console.log("Clicked Login")
    
    this.login_button_is_locked = false;
  }
}


