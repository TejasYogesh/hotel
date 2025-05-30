import { Component } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
@Component({
  selector: "app-reservationform",
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: "./reservationform.component.html",
  styleUrl: "./reservationform.component.css",
})
export class ReservationformComponent implements OnInit {
  reservationForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      checkInDate: ["", Validators.required],
      checkOutDate: ["", Validators.required],
      guestName: ["", Validators.required],
      guestEmail: ["", [Validators.required, Validators.email]],
      roomNumber: ["", Validators.required],
    });
  }

  onSubmit() {
    if (this.reservationForm.valid) {
      console.log("Valid Form");
      alert("Testing")
    }
  }
}
