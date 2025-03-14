import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieModel } from '../../model/movie.model';
import { MovieService } from '../../services/movie.service';
import { JsonPipe, NgIf } from '@angular/common';
import { LoadingComponent } from "../loading/loading.component";
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatListModule} from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-details',
  imports: [ NgIf, LoadingComponent, MatCardModule, MatListModule, MatButtonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  public movie: MovieModel | null = null

public constructor (private route: ActivatedRoute) {
  route.params.subscribe(params=> {
    MovieService.getMovieById(params['id'])
      .then(rsp => 
        this.movie = rsp.data)
      .catch(e => console.error(e))
  });
}
}