import { Component } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { ParkingRecord } from './parking'
import { DatePipe, NgOptimizedImage } from '@angular/common'
import { ParkingFormComponent } from '../parking-form/parking-form.component'

@Component({
  selector: 'app-parking',
  standalone: true,
  imports: [ReactiveFormsModule, DatePipe, NgOptimizedImage, ParkingFormComponent],
  templateUrl: './parking.component.html',
  styleUrl: './parking.component.css'
})
export class ParkingComponent {
  parkingRecords: ParkingRecord[] = []

  addRecord(cardPark: ParkingRecord) {
    this.parkingRecords = [...this.parkingRecords, cardPark]
  }
  removeRecord(plate: string) {
    this.parkingRecords = this.parkingRecords.filter((park) => park.plate !== plate)
  }
}
