import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReservationService } from "../reservation.service";
import { Reservation } from "../models/reservation";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "../home/home.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: "app-reservationlist",
  imports: [CommonModule, RouterModule, HomeComponent, FooterComponent],
  templateUrl: "./reservationlist.component.html",
  styleUrl: "./reservationlist.component.css",
})
export class ReservationlistComponent implements OnInit {
  reservations: Reservation[] = [];
  constructor(private reservationService: ReservationService) {}

  ngOnInit(): void {
    this.reservations = this.reservationService.getReservations();
  }
  deleteReservation(id: string) {
    this.reservationService.deleteReservation(id);
  }
  get formattedDate(): string {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  }
  date = this.formattedDate;
   

  timings: string = new Date().toLocaleTimeString();
}
