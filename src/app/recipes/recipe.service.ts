import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";


@Injectable()
export class RecipeService {
  recipeChanges = new Subject<Recipe[]>
  private recipes: Recipe[] = []

    constructor(private slService: ShoppingListService){} 
      getRecipes() {
        return this.recipes.slice()
      }

      getRecipeById(index: number) {
        return this.recipes[index]
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients)
      }

      addRecipe(recipe: Recipe) {
        this.recipes.push(recipe)
        this.recipeChanges.next(this.recipes.slice())
      }

      updateRecipe(index: number, newRecipe) {
        this.recipes[index] = newRecipe;
        this.recipeChanges.next(this.recipes.slice())
      }

      deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipeChanges.next(this.recipes.slice())
        
      }
      
      setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipeChanges.next(this.recipes.slice())
      }
}