import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class HomeComponent {
  sendEmail() {
    // כאן תוכל להוסיף את הלוגיקה לשליחת מייל
    alert('מייל נשלח!');
  }

  navigateToContact() {
    // כאן תוכל להוסיף את הלוגיקה למעבר לדף קשר
    alert('מעבר לדף קשר!');
  }
}