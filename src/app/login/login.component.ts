import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { CommonModule, JsonPipe } from '@angular/common';
import { AxiosError } from 'axios';
import { MovieModel } from '../../model/movie.model';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [CommonModule, MatButtonModule, MatCardModule, MatInputModule, MatFormFieldModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  public email: string = ''
  public password: string = ''

  constructor(private router: Router) {
      if (UserService.getActiveUser()) {
          router.navigate(['/user']);
          return;
      }

   }

    public doLogin(){ 
      if (UserService.login(this.email, this.password)) {
        this.router.navigate(['/user']);
        return;
      }

      alert('Invalid email or password');
    }
}