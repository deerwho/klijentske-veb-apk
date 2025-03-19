import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router, RouterLink } from '@angular/router';
import { MovieModel } from '../../model/movie.model';
import { NgIf, NgFor } from '@angular/common';
import { MatButtonModule, MatIconAnchor } from '@angular/material/button';
import { MatCard, MatCardModule } from '@angular/material/card';
import { UserModel } from '../../model/user.model';
import { OrderModel } from '../../model/order.model';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';





@Component({
  selector: 'app-user',
  imports: [NgIf, MatButtonModule, MatCardModule, MatExpansionModule, MatAccordion, MatFormFieldModule, MatInputModule, MatIconModule, MatDatepickerModule, FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  public user: UserModel | null = null;
  public oldPasswordValue = '';
  public newPasswordValue = '';
  public repeatPasswordValue = '';

  public constructor(private router: Router) {
    if (!UserService.getActiveUser()) {
      router.navigate(['/home']);
      return;
    }
    this.user = UserService.getActiveUser();
    console.log(this.user);
  }

  public doChangePassword() {
    if (this.oldPasswordValue == '' || this.newPasswordValue == null) {
      alert('Password cant be empty')
      return
    }
    if (this.newPasswordValue !== this.repeatPasswordValue) {
      alert('Password dont match')
      return
    }
    if (this.oldPasswordValue !== this.user?.password) {
      alert('Wrong old password')
      return
    }
    alert(UserService.changePassword(this.newPasswordValue) ?
      'Password has been changed' : 'Failed to change password')

      this.oldPasswordValue = '';
      this.newPasswordValue = '';
      this.repeatPasswordValue = '';
      
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

  public doRating(order: OrderModel, r: boolean) {
    if (UserService.changeRatingStatus(r, order.id)) {
      this.user = UserService.getActiveUser()
    }
  }

}


