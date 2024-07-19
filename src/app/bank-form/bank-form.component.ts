import { NgOptimizedImage } from '@angular/common'
import { Component, Output, EventEmitter } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'

import { type CustomerBank } from '../bank/bank'

@Component({
  selector: 'app-bank-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgOptimizedImage],
  templateUrl: './bank-form.component.html',
  styleUrl: './bank-form.component.css'
})
export class BankFormComponent {
  @Output() recordAddedEvent = new EventEmitter<Pick<CustomerBank, 'dni'>>()
  formAtention = new FormGroup({
    dni: new FormControl('', [Validators.required, Validators.pattern(/^\d{8}$/), Validators.minLength(8)])
  })
  addCustomer() {
    const newRecord: Pick<CustomerBank, 'dni'> = {
      dni: this.formAtention.value.dni ?? ''
    }
    this.recordAddedEvent.emit(newRecord)
    this.formAtention.reset()
  }
}
