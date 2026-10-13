import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  
  //   constructor(private router: Router) {}
  // sendEmail() {
  //   this.router.navigate(['/recipe']);
  //   // alert('Email Sent!');
  // }

  // navigateToContact() {
  //   this.router.navigate(['/contact']);
  //   // alert('Navigating to Contact Page!');
  // }
}
