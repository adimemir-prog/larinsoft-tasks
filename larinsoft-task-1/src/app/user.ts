export class User {
  id               : string = "";
  first_name       : string = "";
  last_name        : string = "";
  telephone_number : string = "";
  email            : string = "";

  constructor(id : string = "", first_name: string = "", last_name:string = "", telephone_number: string = "", email: string = "") {
    this.id               = id;
    this.first_name       = first_name;
    this.last_name        = last_name;
    this.telephone_number = telephone_number;
    this.email            = email; 
  }

  clone() {
    return new User(this.first_name, this.last_name, this.telephone_number, this.email);
  }

  get is_email_valid() {
    // let html_element = this.get_email_element();
    let candid : string = this.email;
    // let regex : RegExp = /[a-zA-Z]/;     
    let regex : RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let is_valid = regex.test(candid);

    return is_valid;
  }

  get is_email_invalid() {
    return !this.is_email_valid;
  }

  get all_is_valid() {
    return this.first_name !== "" && this.last_name !== "" && this.is_email_valid && this.is_telephone_number_valid;
  }

  get is_telephone_number_valid() : boolean {
    let result : boolean = true;
    let telnum = this.telephone_number;
    
    if (!(telnum[0] === "+" && telnum[1] === "9" && telnum[2] === "0")) return false;

    let rest  = telnum.substring(3);
    // condition &&= rest.length === 10;
    if (!(rest.length === 10)) return false;

    for (let ch of rest) {
      if (ch < "0" || "9" < ch ) {
        result = false;
        break;
      }
    }
    
    return result;
  }
   
} // export class User

export function CloneUser(orig : User) {
  let copy = orig.clone();
  return copy;
}
