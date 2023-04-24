import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit  {
  email: string="";
  password: string="";

  constructor(private authenticationService: AuthenticationService,
    private router : Router){

    }
    ngOnInit(): void {
      
    }
   
    /*confirmRegister(){
      var status = confirm("Registered Successfully");
      if(status==true){
        this.router.navigate(['/login-page']);
      }
      else{
        this.router.navigate(['/signup-page']);
      }
  }*/

  confirmRegister(){

    if(this.email === '' || this.password === ''){
      var status = confirm("It is mandatory to fill all the fields");
    }
    else{
    var status = confirm("Registered Successfully");
    if(status==true){
      this.router.navigate(['login-page']);
    }
    }
    }
    
    }
 

