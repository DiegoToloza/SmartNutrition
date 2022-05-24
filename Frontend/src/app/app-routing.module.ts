import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { DietsComponent } from './components/diets/diets.component';
import { DietCreateComponent } from './components/diet-create/diet-create.component';
import { TrainingsComponent } from './components/trainings/trainings.component';
import { ShopComponent } from './components/shop/shop.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';


const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: 'inicio', component: HomeComponent},
  {path: 'dietas', component: DietsComponent},
  {path: 'dietas/:category', component: DietsComponent},
  {path: 'dieta/agregar-dieta', component: DietCreateComponent},
  {path: 'ejercicios', component: TrainingsComponent},
  {path: 'ejercicios/:category', component: TrainingsComponent},
  {path: 'ejercicios/:category/:difficulty', component: TrainingsComponent},
  {path: 'tienda', component: ShopComponent},
  {path: 'registrarse', component: LogInComponent},
  {path: 'iniciar-sesion', component: SignInComponent},
  {path: 'sobre-nosotros', component: AboutUsComponent},
  {path: 'contacto', component: ContactComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
