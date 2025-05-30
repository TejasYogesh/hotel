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

  getReservations(): Reservation[] {
    return this.reservations;
  }
  getReservation(id: string): Reservation | undefined {
    return this.reservations.find((res: Reservation) => res.id === id);
  }
  // adding the reservations:
  addReservation(reservation: Reservation) {
    this.reservations.push(reservation);
  }
  // deleting the reservations:
  deleteReservation(id: string): void {
    let index = this.reservations.findIndex(
      (res: Reservation) => res.id === id
    );
    if (index !== -1) {
      this.reservations.splice(index, 1);
    }
    // the function of the splice is to remove one item at the found index from the reservations array
  }
  updateReservation(updated: Reservation): void {
    let index = this.reservations.findIndex(
      (res: Reservation) => res.id === updated.id
    );
    this.reservations[index] = updated;
  }
}
