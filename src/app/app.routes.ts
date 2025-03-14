import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';  
import { DetailsComponent } from './details/details.component';
export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'search', component: SearchComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'cart', component: CartComponent},
    {path: 'details/:id', component: DetailsComponent},
    {path: '**', redirectTo: ''}
];
