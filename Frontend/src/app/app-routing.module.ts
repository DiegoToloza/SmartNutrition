import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { DietsComponent } from './components/diets/diets.component';
import { TrainingsComponent } from './components/trainings/trainings.component';
import { ShopComponent } from './components/shop/shop.component';
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'inicio', component: HomeComponent},
  {path: 'dietas', component: DietsComponent},
  {path: 'dietas/no-veganas', component: DietsComponent},
  {path: 'dietas/veganas', component: DietsComponent},
  {path: 'dietas/mis-dietas', component: DietsComponent},
  {path: 'ejercicios', component: TrainingsComponent},
  {path: 'tienda', component: ShopComponent},
  {path: 'login', component: LoginComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
