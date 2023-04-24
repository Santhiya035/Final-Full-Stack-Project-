import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { CreateBookRecordsComponent } from './create-book-records/create-book-records.component';
import { UpdateBookDetailsComponent } from './update-book-details/update-book-details.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { SignupPageComponent} from './signup-page/signup-page.component';
import { LoginPageComponent} from './login-page/login-page.component';
import { LogoutPageComponent } from './logout-page/logout-page.component'; 
import { AuthGaurdServiceService } from './auth-gaurd.service';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { AboutusComponent } from './aboutus/aboutus.component';

/* Adding the path for the components and importing the respective components*/
const routes: Routes = [
  {path: 'books', component: BookListComponent,canActivate:[AuthGaurdServiceService]},
  {path: 'create-book-records', component: CreateBookRecordsComponent,canActivate:[AuthGaurdServiceService]},
  {path: '', redirectTo: 'login-page', pathMatch: 'full'},
  {path: 'update-book-details/:bookId', component: UpdateBookDetailsComponent,canActivate:[AuthGaurdServiceService]},
  {path: 'book-details/:bookId', component: BookDetailsComponent,canActivate:[AuthGaurdServiceService]},
  {path: 'signup-page', component: SignupPageComponent},
  {path: 'login-page', component: LoginPageComponent},
  {path:'aboutus',component: AboutusComponent},
  {path: 'logout-page',component: LogoutPageComponent,canActivate:[AuthGaurdServiceService]},
  {path: 'profile-card',component:ProfileCardComponent,canActivate:[AuthGaurdServiceService]},
  {path:'contact-details',component: ContactDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }
