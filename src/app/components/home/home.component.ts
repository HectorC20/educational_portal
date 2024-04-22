import { Component } from '@angular/core';
import {EmailComponent} from "./email/email.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    EmailComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
