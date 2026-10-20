import { Component } from '@angular/core';
import { ContactInterface } from '../../interfaces/contactInterface';
import { Contact } from '../contact/contact';

@Component({
  imports: [Contact],
  selector: 'app-contacts-list',
  styleUrl: './contacts-list.scss',
  templateUrl: './contacts-list.html',
})

export class ContactsList {

  contactList: ContactInterface[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'John@example.com'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'Jane@example.com'
    },
    {
      id: 3,
      name: 'Alice Johnson',
      email: 'Alice@example.com'
    },
    {
      id: 4,
      name: 'Bob Williams',
      email: 'Bob@example.com '
    }
  ]

  onDeleteContact(contactId: number) {
    this.contactList = this.contactList.filter(contact => contact.id !== contactId);
  }

  onEditContact(contact: ContactInterface) {
    // Handle contact edit logic here
  }

}
