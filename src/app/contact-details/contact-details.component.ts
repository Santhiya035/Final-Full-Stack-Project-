import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit{
  router: any;
  emessage: string | undefined;
  ngOnInit(): void {
  }

  contactSubmited(){
    var status = confirm("ThankYou for your response.Are you sure to submit your details");
    if(status==true)
    {
      this.emessage ="ThankYou for the response!!";
      this.router.navigate(['books']);
      console.log("navigate..");
    }
  }
}
