import { Component } from '@angular/core'
import { RouterLink, RouterOutlet } from '@angular/router'
import { ParkingComponent } from './parking/parking.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ParkingComponent, RouterLink, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-workspace'
}
