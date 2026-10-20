import { Component } from '@angular/core';
import { RecipeInterface } from '../../interfaces/recipeInterface';

@Component({
  imports: [],
  selector: 'app-send-email',
  styleUrl: './send-email.scss',
  templateUrl: './send-email.html',
})
export class SendEmail {
  isRecipeSelected: boolean = false;
  isTipSelected: boolean = false;
  isAdvertisingSelected: boolean = false;


  selectRecipe() {
    this.isRecipeSelected = true;
    this.isTipSelected = false;
    this.isAdvertisingSelected = false;
  }

  selectTip() {
    this.isRecipeSelected = false;
    this.isTipSelected = true;
    this.isAdvertisingSelected = false;
  }

  selectAdvertising() {
    this.isRecipeSelected = false;
    this.isTipSelected = false;
    this.isAdvertisingSelected = true;
  }



imagePreviewUrl = '';
imageError = '';

onImageSelected(event: Event): void {
  const input = event.target as HTMLInputElement;
  const file = input.files?.[0];

  this.imageError = '';

  if (this.imagePreviewUrl) {
    URL.revokeObjectURL(this.imagePreviewUrl);
    this.imagePreviewUrl = '';
  }

  if (!file) {
    return;
  }

  if (!file.type.startsWith('image/')) {
    this.imageError = 'יש לבחור קובץ תמונה.';
    input.value = '';
    return;
  }

  this.imagePreviewUrl = URL.createObjectURL(file);
}
}
