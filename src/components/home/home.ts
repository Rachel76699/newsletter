import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
  constructor(private router: Router) {}
  sendEmail() {
    this.router.navigate(['/recipe']);
    // alert('Email Sent!');
  }

  navigateToContact() {
    this.router.navigate(['/contact']);
    // alert('Navigating to Contact Page!');
  }
}