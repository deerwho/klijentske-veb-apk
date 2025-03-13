import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { CommonModule, JsonPipe } from '@angular/common';
import { AxiosError } from 'axios';
import { MovieModel } from '../../model/movie.model';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-see-more',
  imports: [],
  templateUrl: './see-more.component.html',
  styleUrl: './see-more.component.css'
})
export class SeeMoreComponent {

}
