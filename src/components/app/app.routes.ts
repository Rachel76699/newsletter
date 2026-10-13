import { Routes } from '@angular/router';
import { Home } from '../home/home';
import { Recipe } from '../recipe/recipe';
import { PageNotFound } from '../page-not-found/page-not-found';
import { ContactsList } from '../contacts-list/contacts-list';


export const routes: Routes = [
    {path: '', component: Home},
    {path: 'recipe', component: Recipe},
    {path: 'contact', component: ContactsList},
    {path: '**', component: PageNotFound},
];
