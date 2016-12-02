import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { RecipeBookAppComponent } from "./recipe-book.component";
import { HeaderComponent } from "./header.component";
import { DropdownDirective } from "./dropdown.directive";
// import { ShoppingListAddComponent } from "./shopping-list/shopping-list-add.component";
// import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
// import { RecipesComponent } from "./recipes/recipes.component";
// import { RecipeListComponent } from "./recipes/recipe-list/recipe-list.component";
// import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
// import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
// import { RecipeItemComponent } from "./recipes/recipe-list/recipe-item.component";
// import { RecipeStartComponent } from "./recipes/recipe-start.component";
import { ShoppingListService } from "./shopping-list/shopping-list.service";
import { RecipeService } from "./recipes/recipe.service";
import { routing } from "./app.routing";
// import { RecipesModule } from './recipes/recipes.module';
// import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    RecipeBookAppComponent,
    HeaderComponent,
    DropdownDirective,
    HomeComponent,
    // ShoppingListAddComponent,
    // ShoppingListComponent,
    // RecipesComponent,
    // RecipeListComponent,
    // RecipeDetailComponent,
    // RecipeEditComponent,
    // RecipeItemComponent,
    // RecipeStartComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    // FormsModule,
    // ReactiveFormsModule,
    routing,
    // ShoppingListModule,
    // RecipesModule
  ],
  providers: [ShoppingListService, RecipeService],
  bootstrap: [RecipeBookAppComponent]
})
export class AppModule {}
