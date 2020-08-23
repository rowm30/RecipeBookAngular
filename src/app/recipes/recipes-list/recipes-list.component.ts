import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipe: Recipe[] = [
    new Recipe('A test recipe','This is only for test','https://c1.wallpaperflare.com/preview/739/376/852/kyllingefrikadeller-potatoes-meatballs-recipes.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
