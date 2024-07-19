import { NgOptimizedImage } from '@angular/common'
import { Component, EventEmitter, Output } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'

import { type ParkingRecord } from '../parking/parking'

@Component({
  selector: 'app-parking-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgOptimizedImage],
  templateUrl: './parking-form.component.html',
  styleUrl: './parking-form.component.css'
})
export class ParkingFormComponent {
  @Output() parkCarAddedEvent = new EventEmitter<ParkingRecord>()
  formParking = new FormGroup({
    plate: new FormControl('', [Validators.required, Validators.minLength(4)])
  })
  addParkingCar() {
    const newRecord: ParkingRecord = { plate: this.formParking.value.plate ?? '', entryTime: new Date() }
    this.parkCarAddedEvent.emit(newRecord)
    this.formParking.reset()
  }
}
