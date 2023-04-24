import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

/* authenticate service is used to check the credentials of username and password */
export class AuthenticationService {

  constructor() { }

  authenticate(username: any, password: any){
    if(username === "Santhiya" && password === "030599") {
      sessionStorage.setItem('username', username)
      return true;
    } 
    else {
      return false;
    }
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut(){
    sessionStorage.removeItem('username')
  }
}
