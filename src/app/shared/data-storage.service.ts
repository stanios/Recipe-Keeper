import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { map, tap } from "rxjs";


@Injectable({providedIn: 'root'})
export class DataStorageService {
    constructor(
        private http: HttpClient, 
        private rsService: RecipeService
        ){}
    
    storeRecipes() {
        const recipes = this.rsService.getRecipes();
        return this.http.put('https://ng-recipe-book-9be2d-default-rtdb.europe-west1.firebasedatabase.app/recipes.json', recipes)
        
    }

    fetchRecipes() {
        return this.http.get<Recipe[]>(
        'https://ng-recipe-book-9be2d-default-rtdb.europe-west1.firebasedatabase.app/recipes.json',
        ).pipe(
        map(recipes => {
        return recipes.map(recipe => {
            return{...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []}
        })
        }),
        tap(recipes => {
            this.rsService.setRecipes(recipes)
        })
        ) 
    }
}


