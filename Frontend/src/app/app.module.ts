import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { DietsComponent } from './components/diets/diets.component';
import { TrainingsComponent } from './components/trainings/trainings.component';
import { ShopComponent } from './components/shop/shop.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';

import { HeaderComponent } from './subcomponents/header/header.component';
import { FooterComponent } from './subcomponents/footer/footer.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DietsComponent,
    TrainingsComponent,
    ShopComponent,
    LoginComponent,
    ErrorComponent,
    HeaderComponent,
    FooterComponent,
    SignInComponent,
    AboutUsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
