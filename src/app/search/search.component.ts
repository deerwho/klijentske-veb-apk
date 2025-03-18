import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MovieService } from '../../services/movie.service';
import { MovieModel } from '../../model/movie.model';
import { AxiosError } from 'axios';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from "../loading/loading.component";
import { RouterLink } from '@angular/router';
import { UtilsService } from '../utils.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';


@Component({
  selector: 'app-search',
  imports: [MatButtonModule, MatCardModule, CommonModule, LoadingComponent, RouterLink, MatInputModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  public movies: MovieModel[] | null = null
  public error: string | null = null
  allData: MovieModel[] | null = null
  displayedColumns: string[] = ['title', 'director', 'genre', 'rating', 'year', 'runtime', 'status', 'actions'];


  public constructor(public utils: UtilsService) {
    MovieService.getMovies()
      .then(rsp => {
        this.allData = rsp.data
        this.movies = rsp.data
      })
      .catch((e: AxiosError) => this.error = `${e.code}: ${e.message}`)
  }

  public doSearchByTitle(e: any) {
    const input = e.target.value
    if (this.movies == null) return
    if (input == '') {
      this.movies = this.allData
      return
    }
    this.movies = this.allData?.filter(obj => {
      return obj.title.toLowerCase().includes(input)
    } ) ?? []
  }
  public doSearchByDescription(e: any) {
    const input = e.target.value
    if (this.movies == null) return
    if (input == '') {
      this.movies = this.allData
      return
    }
    this.movies = this.allData?.filter(obj => obj.description.toLowerCase().includes(input)
     ) ?? []
  }
  public doSearchByDirector(e: any) {
    const input = e.target.value
    if (this.movies == null) return
    if (input == '') {
      this.movies = this.allData
      return
    }
    this.movies = this.allData?.filter(obj => obj.director.name.toLowerCase().includes(input)
     ) ?? []
  }
  public doSearchByActor(e: any) {
    const input = e.target.value
    if (this.movies == null) return
    if (input == '') {
      this.movies = this.allData
      return
    }
    this.movies = this.allData?.filter(obj => obj.movieActors.some(actorObj => actorObj.actor.name.toLowerCase().includes(input))
     ) ?? []
  }
  
  public doSearchByGenre(e: any) {
    const input = e.target.value
    if (this.movies == null) return
    if (input == '') {
      this.movies = this.allData
      return
    }
    this.movies = this.allData?.filter(obj => obj.movieGenres.some(genreObj => genreObj.genre.name.toLowerCase().includes(input))
     ) ?? []
  }
  public doSearchByDuration(e: any) {
    const input = e.target.value
    if (this.movies == null) return
    if (input == '') {
      this.movies = this.allData
      return
    }
    this.movies = this.allData?.filter(obj => obj.runTime.toString().includes(input)
     ) ?? []
  }
  public doSearchByReleaseDate(e: any) {
    const input = e.target.value
    if (this.movies == null) return
    if (input == '') {
      this.movies = this.allData
      return
    }
    this.movies = this.allData?.filter(obj => obj.startDate.toString().includes(input)
     ) ?? []
  }
  public doSearchByProjectionDate(e: any) {
    const input = e.target.value
    if (this.movies == null) return
    if (input == '') {
      this.movies = this.allData
      return
    }
    this.movies = this.allData?.filter(obj => obj.createdAt.toString().includes(input)
     ) ?? []
  }
  public doSearchByProjectionTime(e: any) {
    const input = e.target.value
    if (this.movies == null) return
    if (input == '') {
      this.movies = this.allData
      return
    }
    this.movies = this.allData?.filter(obj => obj.director.name.toLowerCase().includes(input)
     ) ?? []
  }
  public doSearchByTicketPrice(e: any) {
    const input = e.target.value
    if (this.movies == null) return
    if (input == '') {
      this.movies = this.allData
      return
    }
    this.movies = this.allData?.filter(obj => obj.toString().includes(input) ?? []
     ) ?? []
  }
  public doSearchByRating(e: any) {
    const input = e.target.value
    if (this.movies == null) return
    if (input == '') {
      this.movies = this.allData
      return
    }
    this.movies = this.allData?.filter(obj => obj.director.name.toLowerCase().includes(input)
     ) ?? []
  }
}

