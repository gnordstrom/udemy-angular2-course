import { recipesRouting } from './recipes.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-list/recipe-item.component';
import { RecipeStartComponent } from './recipe-start.component';
import { RecipesComponent } from './recipes.component';

@NgModule({
    declarations: [
        RecipesComponent, 
        RecipeStartComponent, 
        RecipeItemComponent, 
        RecipeListComponent,
        RecipeEditComponent,
        RecipeDetailComponent
    ],
    imports: [ReactiveFormsModule, CommonModule, recipesRouting]
})
export class RecipesModule {}