import { Injectable, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

const port_number = "3000";
const apiUrl = "http://localhost:" + port_number + "/users";

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  users : User[] = []; // this is always equal to the data received DO NOT TOUCH.
  last_id : number = 0;

  constructor(protected http : HttpClient) { 
    this.updateServiceData();
  }

  async updateServiceData() {
    await new Promise((resolve)=>this.getUsersObservable().subscribe((users) => {
        this.users = users;
        console.log("got data", users);
        resolve(0);
        // reject(1); dead code
    }));
    let maxi = -1;  // so that when empty, start from 0.
        for (let user of this.users) {
          console.log("considered", user);
          let num_id : number = Number(user.id);
          if (num_id > maxi) maxi = num_id;
        }
    this.last_id = maxi;
  }

  // updateServiceData() {
  //   this.getUsersObservable().subscribe((users) => {
  //       this.users = users;
  //       console.log("got data", users);
  //       let maxi = -1;  // so that when empty, start from 0.
  //       for (let user of this.users) {
  //         let num_id : number = Number(user.id);
  //         if (num_id > maxi) maxi = num_id;
  //       }
  //       this.last_id = maxi;
  //   });
  // }

  // updateServiceData() {
  //   this.updateServiceDataUsers();
  //   this.updateServiceDataLastId();
  // }

  updateServiceDataUsers() {
    this.getUsersObservable().subscribe((users) => {
        this.users = users;
        console.log("got data", users);
    });
  }

  updateServiceDataLastId() {
    let maxi = -1; // so that when empty, start from 0.
    for (let user of this.users) {
      let num_id : number = Number(user.id);
      if (num_id > maxi) maxi = num_id;
    }
    this.last_id = maxi; 
  }

  // doSubscription() {
  //   this.getUsersObservable().subscribe((users) => {
  //       this.users = users;
  //       console.log("got data", users);
  //       let maxi = 0;
  //       for (let user of users) {
  //         let num_id : number = +user.id;
  //         if (num_id > maxi) maxi = num_id;
  //       }
  //   });
  // }

  getUsersObservable() : Observable<User[]> {
    // console.log(this.http.get<User[]>(apiUrl));
    return this.http.get<User[]>(apiUrl);
  }

  // tryPostAfterAddUser(user : User) {
  //   if (user.all_is_valid) {
  //     this.addUserToComponent(user);
  //     this.postUser(user);
  //   }   
  // }

  /** returns sitrep*/
  tryPostUser(user : User) : boolean {
    let result_is_success = false;
    if (user.all_is_valid)
    {
      let to_post = user; to_post.id = String(this.last_id + 1);
      
      result_is_success = this.postUser(to_post);
      if (result_is_success) {
        this.updateServiceDataUsers();
        this.last_id = Number(to_post.id);
      } // if succ.
    } // if valid  
    return result_is_success;
  } // method

  postUser(user : User) : boolean {
    let response = this.http.post<User>(apiUrl, user);
    response.subscribe((msg)=>console.log("Added user", msg), ()=>{return false;});
    
    return true;
  }

  /** returns sitrep*/
  tryPutUser(user : User) : boolean {
    let result_is_success = false;
    if (user.all_is_valid)
    {
      let to_put = user;  
      result_is_success = this.putUser(to_put);
      if (result_is_success) {
        this.updateServiceDataUsers();        
      } // if succ.
    } // if valid  
    return result_is_success;
  } // method

  putUser(user : User) : boolean {
    let url = `${apiUrl}/${user.id}`; // console.log("trying put with url", url, "with id", user.id);
    let response = this.http.put<User>(url,  user);
    response.subscribe((msg)=>console.log("Updated user", msg), ()=>{console.log("Failed to update user.");return false;});
    
    return true;
  }

  // tryAddUserToComponent(user: User) {
  //   let condition : boolean = user.all_is_valid;
    
  //   if(condition) this.addUserToComponent(user);
  //   else return;
  // }

  // addUserToComponent(user: User) {
  //   let to_add = new User(String(this.last_id+1), user.first_name, user.last_name, user.telephone_number, user.email);
  //   this.users.push(to_add);
  // }

  deleteUser(user : User) {
    let url = apiUrl + `/${user.id}`;
    console.log("target url:", url);
    let response = this.http.delete<User>(url);
    response.subscribe((msg) => {console.log("Deleted", msg); this.updateServiceData();}, ()=>console.log("Delete failed."));
  }

  editUser(user : User) : boolean {
    // let response = this.http.post<User>(apiUrl, user);
    let is_success = this.tryPutUser(user);
    return is_success;
  }
  
}

