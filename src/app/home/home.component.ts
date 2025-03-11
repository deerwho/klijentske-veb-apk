import { Component } from '@angular/core';
import { FlightService } from '../../services/fligh.service';
import { CommonModule, JsonPipe } from '@angular/common';
import { AxiosError } from 'axios';
import { FlightModel } from '../../model/flight.model';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  public flights: FlightModel[] | null = null
  public error: string | null = null 
  

    constructor() {
    FlightService.getFlight()
    .then(rsp => this.flights = rsp.data.content)
    .catch((e: AxiosError) => this.error = `${e.code}: ${e.message}`)
  } 
}