import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ReservationformComponent } from "./reservationform/reservationform.component";
import { ReservationlistComponent } from "./reservationlist/reservationlist.component";

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "Form", component: ReservationformComponent },
  { path: "list", component: ReservationlistComponent },
  { path: "edit/:id", component: ReservationformComponent },
  //   { path: "booking", component: BookingComponent },
];
