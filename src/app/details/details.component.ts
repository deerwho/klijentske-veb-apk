import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MovieModel } from '../../model/movie.model';
import { OrderModel } from '../../model/order.model';
import { MovieService } from '../../services/movie.service';
import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { LoadingComponent } from "../loading/loading.component";
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-details',
  imports: [NgIf,  LoadingComponent, MatCardModule, MatListModule, MatButtonModule, RouterLink,],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  public movie: MovieModel | null = null
  public order: OrderModel | null = null

  public constructor(private route: ActivatedRoute) {
    route.params.subscribe(params => {
      MovieService.getMovieById(params['id'])
        .then(rsp =>
          this.movie = rsp.data)
        .catch(e => console.error(e))
    });
  }

  public getGenres() {
    if (this.movie == null) return ''
    return this.movie.movieGenres.map(g=>g.genre.name).toString()
  }

  public getActors(){
    if(this.movie == null) return ''
    return this.movie.movieActors.map(a=>a.actor.name).toString()
  }
}