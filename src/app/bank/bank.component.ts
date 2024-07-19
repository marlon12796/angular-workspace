import { Component } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { CustomerBank } from './bank'
import { NgOptimizedImage } from '@angular/common'
@Component({
  selector: 'app-bank',
  standalone: true,
  templateUrl: './bank.component.html',
  styleUrl: './bank.component.css',
  imports: [ReactiveFormsModule, NgOptimizedImage]
})
export class BankComponent {
  customersBank: CustomerBank[] = []
  formAtention = new FormGroup({
    dni: new FormControl('', [Validators.required, Validators.pattern(/^\d{8}$/), Validators.minLength(8)])
  })
  addCustomer() {
    this.customersBank = [
      ...this.customersBank,
      { dni: this.formAtention.value.dni ?? '', id: this.customersBank.length + 1 }
    ]
    this.formAtention.reset()
  }
  removeCustomer(dni: string) {
    this.customersBank = this.customersBank.filter((customer) => customer.dni !== dni)
  }
}
