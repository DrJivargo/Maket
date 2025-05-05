import { Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {InfoPageComponent} from './pages/info-page/info-page.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {OrderComponent} from './pages/order/order.component';

export const routes: Routes = [
  { path: '', component:  AppComponent},
  { path: 'info', component:  InfoPageComponent},
  { path: 'login', component: LoginPageComponent},
  { path: 'order', component:  OrderComponent},
];
