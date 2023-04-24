import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{
  username = '';
  password = '';
  invalidLogin = false
  emessage: string | undefined;

  constructor(private router: Router,
    private loginService: AuthenticationService) { }
    
    ngOnInit(){

    }

    checkLogin(){
      if(this.loginService.authenticate(this.username, this.password)
      ){
        this.router.navigate(['books']);
        console.log("navigate..");
        this.invalidLogin = false;
      } else
        this.invalidLogin = true;
        this.emessage ="Enter correct Username or Password!!";
    }

}
