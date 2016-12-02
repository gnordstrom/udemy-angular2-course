// import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { HostListener } from '@angular/core';
import { recipesRouting } from './recipes/recipes.routing';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
// import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const APP_ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'recipes', loadChildren: 'app/recipes/recipes.module#RecipesModule'},
  {path: 'shopping-list', loadChildren: 'app/shopping-list/shopping-list.module#ShoppingListModule'}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
