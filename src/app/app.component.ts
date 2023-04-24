import { Component, OnInit, enableProdMode } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';


enableProdMode();
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/*Head component for all the components */
export class AppComponent implements OnInit{
  title = 'LibraryManagementSystem';//declaring the title as Library Management System


  constructor(public loginService:AuthenticationService,private router:Router) { }
  ngOnInit() {

  }
  
  //Confirmation of logout method,a popup appears when we click on logout list
  confirmLogout(){
    var status= confirm("Are You Sure want to LogOut?");
     if (status==true) {
      this.router.navigate(['logout-page']);//if yes it redirects to login page
       
     }
     else{
      this.router.navigate(['books-list']);//or else stays in the page where book list is viewed
     }
  
    }
}

