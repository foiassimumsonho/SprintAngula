import { Routes } from '@angular/router';
import { LoginComponent } from './view/login/login.component';
import { HomeComponent } from './view/home/home.component'; 
export const routes: Routes = [
  { path: '', component: LoginComponent },
  
  { path: 'home', component: HomeComponent }
];