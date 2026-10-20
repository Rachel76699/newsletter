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
      email: ''
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: ''
    },
    {
      id: 3,
      name: 'Alice Johnson',
      email: ''
    },
    {
      id: 4,
      name: 'Bob Williams',
      email: ''
    }
  ]

  onDeleteContact(contactId: number) {
    //todo: delete contact from the server
    // this.contactList = this.contactList.filter(contact => contact.id !== contactId);
  }

  onEditContact(contact: ContactInterface) {
    //todo: update contact on the server
    // this.contactList = this.contactList.map(c => {
    //   if (c.id === contact.id) {
    //     return { ...c, name: contact.name, email: contact.email };
    //   }
    //   return c;
    //   })
  }

}
