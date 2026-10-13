import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ContactInterface } from '../../interfaces/contactInterface';

@Component({
  imports: [],
  selector: 'app-contact',
  styleUrl: './contact.scss',
  templateUrl: './contact.html',
})
export class Contact {
  @Input() contact!: ContactInterface
  @Output() editContactEvent = new EventEmitter<ContactInterface>();
  @Output() deleteContactEvent = new EventEmitter<number>();
  isEditing: boolean = false;

  editContact() {
    this.isEditing = false;
    this.editContactEvent.emit(this.contact);
  }

  deleteContact() {
    this.deleteContactEvent.emit(this.contact.id);
  }
}
