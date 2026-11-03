import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { ContactInterface } from '../interfaces/contactInterface';

@Service()
export class Service1 {
    
    getContactsList() {
        const http = inject(HttpClient);
        return http.get<ContactInterface[]>('http://localhost:3000/contacts');
    }

}
