import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { CommonModule, JsonPipe } from '@angular/common';
import { AxiosError } from 'axios';
import { MovieModel } from '../../model/movie.model';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { LoadingComponent } from "../loading/loading.component";
import { UtilsService } from '../utils.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatCard } from '@angular/material/card';
import { MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, MatButtonModule, MatCardModule, LoadingComponent, RouterLink],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  public movies: MovieModel[] | null = null
  public error: string | null = null
  isDevMode: any;

  constructor(public utils: UtilsService) {
    MovieService.getMovies()
      .then(rsp => this.movies = rsp.data)
      .catch((e: AxiosError) => this.error = `${e.code}: ${e.message}`)
  }
}