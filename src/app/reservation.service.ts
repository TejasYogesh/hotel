import { Injectable } from "@angular/core";
import { Reservation } from "./models/reservation";
@Injectable({
  providedIn: "root",
})
export class ReservationService {
  private reservations: Reservation[] = [];
  //CRUD:
  //create read update delete:
  // without any id:
  constructor() {
    let savedReservation = localStorage.getItem("reservations");
    this.reservations = savedReservation ? JSON.parse(savedReservation) : [];
  }

  getReservations(): Reservation[] {
    return this.reservations;
  }
  getReservation(id: string): Reservation | undefined {
    return this.reservations.find((res: Reservation) => res.id === id);
  }
  // adding the reservations:
  addReservation(reservation: Reservation) {
    this.reservations.push(reservation);
    console.log(reservation);
    reservation.id = Date.now().toString();
    localStorage.setItem("reservations", JSON.stringify(this.reservations));
  }
  // deleting the reservations:
  deleteReservation(id: string): void {
    let index = this.reservations.findIndex(
      (res: Reservation) => res.id === id
    );
    if (index !== -1) {
      this.reservations.splice(index, 1);
      localStorage.setItem("reservations", JSON.stringify(this.reservations));
    }
    // the function of the splice is to remove one item at the found index from the reservations array
  }
  updateReservation(id: string, updated: Reservation): void {
    let index = this.reservations.findIndex(
     res => res.id === id
    );
    this.reservations[index] = updated;
  }
}
