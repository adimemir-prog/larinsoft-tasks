export class UserLoginInfo {
  username: string;
  password: string;

  get username_field_is_filled() {
    // console.log(this,"empty");
    return false;
  }

  get password_field_is_filled() {
    // console.log(this,"empty");
    return false;
  }
}

