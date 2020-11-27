import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { RegisterUserComponent } from './home/register-user/register-user.component';
import { RegisterCommerceComponent } from './home/register-commerce/register-commerce.component';
import { RegisterCommerceService } from './services/register-commerce/register-commerce.service';
import { RegisterUserService } from './services/register-users/register-user.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    RegisterUserComponent,
    RegisterCommerceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [RegisterCommerceService, RegisterUserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
