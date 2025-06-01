import { Component } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Reservation } from "../models/reservation";
import { ReservationService } from "../reservation.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { HomeComponent } from "../home/home.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: "app-reservationform",
  imports: [FormsModule, ReactiveFormsModule, CommonModule, HomeComponent, FooterComponent],
  templateUrl: "./reservationform.component.html",
  styleUrl: "./reservationform.component.css",
})
export class ReservationformComponent implements OnInit {
  reservationForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private reservationService: ReservationService,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      checkInDate: ["", Validators.required],
      checkOutDate: ["", Validators.required],
      guestName: ["", Validators.required],
      guestEmail: ["", [Validators.required, Validators.email]],
      roomNumber: ["", Validators.required],
    });

    let id = this.activatedRoute.snapshot.paramMap.get("id");

    //  this.activatedRoute is an instance of Angular’s ActivatedRoute service, which gives you information about the current route (URL) in your app.
    // .snapshot gets a static snapshot of the route information at the time the component was created.
    // .paramMap is a map of the route parameters (the dynamic parts of the URL, like /edit/123 where 123 is an id).
    // .get('id') retrieves the value of the id parameter from the URL.

    if (id) {
      let reservation = this.reservationService.getReservation(id);
      if (reservation) {
        // logic and calling for the update function here.
        this.reservationForm.patchValue(reservation);
      }
    }
  }

  onSubmit() {
    if (this.reservationForm.valid) {
      //  this.reservationService.addReservation();
      let reservation: Reservation = this.reservationForm.value;

      let id = this.activatedRoute.snapshot.paramMap.get("id");

      //  this.activatedRoute is an instance of Angular’s ActivatedRoute service, which gives you information about the current route (URL) in your app.
      // .snapshot gets a static snapshot of the route information at the time the component was created.
      // .paramMap is a map of the route parameters (the dynamic parts of the URL, like /edit/123 where 123 is an id).
      // .get('id') retrieves the value of the id parameter from the URL.

      if (id) {
       
        this.reservationService.updateReservation(id ,reservation);
      } else {
        this.reservationService.addReservation(reservation);
      }

      this.route.navigate(["/list"]);
    }
  }
}
