import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MovieService } from '../../services/movie.service';
import { MovieModel } from '../../model/movie.model';
import { AxiosError } from 'axios';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from "../loading/loading.component";
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-search',
  imports: [MatButtonModule, MatCardModule, CommonModule, LoadingComponent, RouterLink],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent { 
    public movies: MovieModel[] | null = null
    public error: string | null = null
    isDevMode: any;
    dataSource: MovieModel[] | null = null;
    displayedColumns: string[] = ['title', 'director', 'genre', 'rating', 'year', 'runtime', 'status', 'actions'];
  
  
    constructor() {
      MovieService.getMovies()
        .then(rsp => this.movies = rsp.data)
        .catch((e: AxiosError) => this.error = `${e.code}: ${e.message}`)
    }
  }

