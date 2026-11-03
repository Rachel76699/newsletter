import { Component, inject } from '@angular/core';
import { ContactInterface } from '../../interfaces/contactInterface';
import { Contact } from '../contact/contact';
import { HttpClient } from '@angular/common/http';
import { Service1 } from '../../services/service';



@Component({
  imports: [Contact],
  selector: 'app-contacts-list',
  styleUrl: './contacts-list.scss',
  templateUrl: './contacts-list.html',
})

export class ContactsList {


  contactList: any[] = [];

  getContactsList() {
    const service = inject(Service1);
    service.getContactsList().subscribe((response: ContactInterface[]) => {
      this.contactList = response;
      console.log('Contacts List:', this.contactList);
    });
  }

  ngOnInit() {
    this.getContactsList();
  }


  // contactList: ContactInterface[] = [
  //   {
  //     id: 1,
  //     name: 'John Doe',
  //     email: 'John@example.com'
  //   },
  //   {
  //     id: 2,
  //     name: 'Jane Smith',
  //     email: 'Jane@example.com'
  //   },
  //   {
  //     id: 3,
  //     name: 'Alice Johnson',
  //     email: 'Alice@example.com'
  //   },
  //   {
  //     id: 4,
  //     name: 'Bob Williams',
  //     email: 'Bob@example.com '
  //   }
  // ]

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
