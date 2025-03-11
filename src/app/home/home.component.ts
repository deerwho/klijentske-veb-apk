import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { CommonModule, JsonPipe } from '@angular/common';
import { AxiosError } from 'axios';
import { MovieModel } from '../../model/movie.model';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  public movies: MovieModel[] | null = null
  public error: string | null = null
  isDevMode: any;


  constructor() {
    MovieService.getMovies()
      .then(rsp => this.movies = rsp.data)
      .catch((e: AxiosError) => this.error = `${e.code}: ${e.message}`)
  }
}