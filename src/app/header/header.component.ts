import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Store } from '@ngrx/store';
import { Recipe } from '../recipes/recipe.model';
import { SetRecipes } from '../store/recipes.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private dataStorage: DataStorageService, private store: Store<{ recipes: Recipe[] }>) {
  }

  ngOnInit() {
    this.dataStorage.fetchRecipes().subscribe(response => {
      this.store.dispatch(new SetRecipes(response))
    })
  }

  saveData() {
    this.dataStorage.storeRecipes().subscribe(response => {
      console.log(response)
    })
  }

  fetchData() {
    this.dataStorage.fetchRecipes()
  }
}
