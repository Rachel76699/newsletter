import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contact } from '../contact/contact';
import { ContactsList } from '../contacts-list/contacts-list';
import { Home } from '../home/home';
// import { ContactList } from '../contacts-list/contacts-list';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContactsList, Contact, Home],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  
}
