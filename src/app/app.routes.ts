import { Routes } from '@angular/router'
import { ParkingComponent } from './parking/parking.component'
import { BankComponent } from './bank/bank.component'
export const routes: Routes = [
  {
    path: '',
    component: ParkingComponent
  },
  {
    path: 'bank',
    component: BankComponent
  }
]
