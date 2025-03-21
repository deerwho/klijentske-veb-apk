import { Component } from '@angular/core';
import { MovieModel } from '../../model/movie.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { MatCardModule } from '@angular/material/card';
import { MatList, MatSelectionList } from '@angular/material/list';
import { NgFor, NgIf } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule, JsonPipe } from '@angular/common';
import { AxiosError } from 'axios';
import { MatButtonModule } from '@angular/material/button';
import { LoadingComponent } from "../loading/loading.component";
import { UtilsService } from '../utils.service';
import { MatCard } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select'
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-order',
  imports: [MatCardModule, NgIf, MatFormFieldModule, MatInputModule, MatListModule, MatCard, MatButtonModule, MatSelectModule, FormsModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  public movie: MovieModel | null = null
  public selectedTicketCount: number = 1;
  public selectedPrice: number = 150;
  public ticketCounts: number[] = Array.from({ length: 20 }, (_, i) => i + 1);
  public projectionTime: number = 1;

  public constructor(private route: ActivatedRoute, public utils: UtilsService, private router: Router) {
    route.params.subscribe(params => {
      MovieService.getMovieById(params['id'])
        .then(rsp =>
          this.movie = rsp.data)
        .catch(e => console.error(e))
    });
  }
  public updateCount(event: any) {
    this.selectedTicketCount = event.target.value
  }
  public updateTime(event: any) {
    this.projectionTime = event.target.value
  }
  public doOrder() {
    Swal.fire({
      title: "You are about to create an order",
      text: "Orders can be canceled anytime from cart",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "d33",
      confirmButtonText: "Yes, place an order!"
    }).then((result) => {
      if (result.isConfirmed) {
        const result = UserService.createOrder({
          id: new Date().getTime(),
          movieId: this.movie!.movieId,
          originalTitle: this.movie!.originalTitle,
          startDate: this.movie!.startDate,
          count: this.selectedTicketCount,
          pricePerItem: this.selectedPrice,
          projectionTime: this.projectionTime,
          status: 'reserved',
          rating: null,
        })
        result ? this.router.navigate(['/cart']) :
        Swal.fire({
          title: "Failed creating an order",
          text: "Something is wrong with order",
          icon: "error"
        });
      }
    });
  }
}
