import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router, RouterLink } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { MovieModel } from '../../model/movie.model';
import { NgIf, NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardModule } from '@angular/material/card';
import { UserModel } from '../../model/user.model';
import { OrderComponent } from '../order/order.component';
import { OrderModel } from '../../model/order.model';


@Component({
  selector: 'app-user',
  imports: [NgIf, NgFor, MatButtonModule, MatCardModule, MatButtonModule, RouterLink],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  public displayedColumns: string[] = ['originalTitle', 'pricePerItem', 'count', 'startDate', 'status'];
  public user: UserModel | null = null;
  public movies: MovieModel[] | null = null

  public constructor(private router: Router) {
    if (!UserService.getActiveUser()) {
      router.navigate(['/home']);
      return;
    }
    this.user = UserService.getActiveUser()
  }

  public doChangePassword() {
    const newpassword = prompt('Enter your new password')
    if (newpassword == '' || newpassword == null) {
      alert('Password cant be empty')
      return
    }
    alert(UserService.changePassword(newpassword) ? 'Password has been changed' : 'Failed to change password')
  }

  public doPay(order: OrderModel) {
    if (UserService.changeOrderStatus('paid', order.id)) {
      this.user = UserService.getActiveUser()
    }
  }

  public doCancel(order: OrderModel) {
    if (UserService.changeOrderStatus('cancelled', order.id)) {
      this.user = UserService.getActiveUser()
    }
  }

  public doWatched(order: OrderModel) {
    if (UserService.changeOrderStatus('watched', order.id)) {
      this.user = UserService.getActiveUser()
    }
  }

  public doRating(order: OrderModel, r:boolean ) {
    if (UserService.changeRatingStatus(r,  order.id)) {
      this.user = UserService.getActiveUser()
    }
  }

}


