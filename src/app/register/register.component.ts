import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { CommonModule, JsonPipe, NgFor } from '@angular/common';
import { AxiosError } from 'axios';
import { MovieModel } from '../../model/movie.model';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-register',
  imports: [CommonModule, MatButtonModule, MatCardModule, MatInputModule, MatFormFieldModule, FormsModule, RouterLink, MatSelectModule, NgFor, ReactiveFormsModule, ],changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  

  public genreList: any[] = []
  public email = ''
  public firstName = ''
  public lastName = ''    
  public phone = ''
  public address = ''
  public password = ''
  public repeatPassword = ''
  public favoriteGenre = ''

  public constructor(private router: Router){
    MovieService.getGenre()
    .then(rsp=> this.genreList = rsp.data)
  }


    public doRegister(){

    if(this.email == '' || this.password == ''){
      alert('Email and password are required fields')
    }
    
    if (this.password !== this.repeatPassword){
      alert('Passwords does not match')
      return
    }
    const result = UserService.createUser({
      email: this.email,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName,
      phone: this.phone,
      address: this.address,
      favoriteGenre: this.favoriteGenre,
      orders: []
    })

    result ? this.router.navigate(['/login']) : alert('Email is already taken')
  }
}
