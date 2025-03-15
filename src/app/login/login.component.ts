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

@Component({
  selector: 'app-login',
  imports: [CommonModule, MatButtonModule, MatCardModule, MatInputModule, MatFormFieldModule, FormsModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  public email: string = ''
  public password: string = ''

  public updateEmail(e: any) {
    this.email = e.target.value
  }
  public updatePassword(e: any) {
    this.password = e.target.value
}
  
    public doLogin() {
      alert(`${this.email} ${this.password}`)
}
}