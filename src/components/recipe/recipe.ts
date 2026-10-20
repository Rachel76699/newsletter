import { Component } from '@angular/core';
import { RecipeInterface } from '../../interfaces/recipeInterface';

@Component({
  imports: [],
  selector: 'app-recipe',
  styleUrl: './recipe.scss',
  templateUrl: './recipe.html',
})
export class Recipe implements RecipeInterface {
  id: number = 0;
  name: string = '';
  description: string = '';
  category: string = '';      
  author: string = '';
  preparationTime: number = 0;
  ingredients: string[] = [];
  instructions: string = '';
  image: any = null;
}
