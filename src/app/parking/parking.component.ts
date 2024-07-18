import { Component } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms'
import { ParkingRecord } from './parking'
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-parking',
  standalone: true,
  imports: [ReactiveFormsModule, DatePipe],
  templateUrl: './parking.component.html',
  styleUrl: './parking.component.css'
})
export class ParkingComponent {
  parkingRecords: ParkingRecord[] = []
  formParking = new FormGroup({
    plate: new FormControl('', Validators.required)
  })
  addRecord() {
    this.parkingRecords = [...this.parkingRecords, { plate: this.formParking.value.plate ?? '', entryTime: new Date() }]
    this.formParking.reset()
  }
  removeRecord(plate: string) {
    this.parkingRecords = this.parkingRecords.filter((park) => park.plate !== plate)
  }
}
