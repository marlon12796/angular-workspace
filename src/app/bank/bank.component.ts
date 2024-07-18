import { Component } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-bank',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './bank.component.html',
  styleUrl: './bank.component.css'
})
export class BankComponent {
  formAtention = new FormGroup({
    dni: new FormControl('')
  })
  addCustomer() {}
}
