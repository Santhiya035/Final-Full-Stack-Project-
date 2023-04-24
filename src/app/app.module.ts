import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';

import { FormsModule} from '@angular/forms';
import { CreateBookRecordsComponent } from './create-book-records/create-book-records.component';
import { UpdateBookDetailsComponent } from './update-book-details/update-book-details.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LogoutPageComponent } from './logout-page/logout-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ListBydepartmentIdComponent } from './list-bydepartment-id/list-bydepartment-id.component';

// NgModule is a class which groups a block of code that have related domain
@NgModule({
  //declaring the components of this project
  declarations: [
    AppComponent,
    BookListComponent,
    CreateBookRecordsComponent,
    UpdateBookDetailsComponent,
    BookDetailsComponent,
    LoginPageComponent,
    LogoutPageComponent,
    SignupPageComponent,
    ProfileCardComponent,
    ContactDetailsComponent,
    AboutusComponent,
    ListBydepartmentIdComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
