import { Component } from '@angular/core'
import { CustomerBank } from './bank'
import { NgOptimizedImage } from '@angular/common'
import { BankFormComponent } from '../bank-form/bank-form.component'
@Component({
  selector: 'app-bank',
  standalone: true,
  templateUrl: './bank.component.html',
  styleUrl: './bank.component.css',
  imports: [NgOptimizedImage, BankFormComponent]
})
export class BankComponent {
  customersBank: CustomerBank[] = []

  addCustomer({ dni }: Pick<CustomerBank, 'dni'>) {
    this.customersBank = [...this.customersBank, { dni, id: this.customersBank.length + 1 }]
  }
  removeCustomer(dni: string) {
    this.customersBank = this.customersBank.filter((customer) => customer.dni !== dni)
  }
}
