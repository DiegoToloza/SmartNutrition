import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';

import { DietsComponent } from './components/diets/diets.component';
import { DietCreateComponent } from './components/diet-create/diet-create.component';
import { DietEditComponent } from './components/diet-edit/diet-edit.component';
import { DietComponent } from './components/diet/diet.component';

import { TrainingsComponent } from './components/trainings/trainings.component';
import { TrainingCreateComponent } from './components/training-create/training-create.component';
import { TrainingEditComponent } from './components/training-edit/training-edit.component';
import { TrainingComponent } from './components/training/training.component';

import { ShopComponent } from './components/shop/shop.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';

import { ErrorComponent } from './components/error/error.component';

import { HeaderComponent } from './subcomponents/header/header.component';
import { HeaderSecondaryComponent } from './subcomponents/header-secondary/header-secondary.component';
import { FooterComponent } from './subcomponents/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DietsComponent,
    DietCreateComponent,
    DietEditComponent,
    DietComponent,
    TrainingsComponent,
    TrainingCreateComponent,
    TrainingEditComponent,
    TrainingComponent,
    ShopComponent,
    LogInComponent,
    SignInComponent,
    AboutUsComponent,
    ContactComponent,
    ErrorComponent,

    HeaderComponent,
    HeaderSecondaryComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }