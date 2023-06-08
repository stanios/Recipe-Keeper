import { NgModule } from "@angular/core";

import { ShoppingListComponent } from "./shopping-list.component";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { Sharedmodule } from "../shared/shared.module";

const routes: Routes = [
    { path: '', component: ShoppingListComponent }
]

@NgModule({
    declarations:[
        ShoppingListComponent,
        ShoppingEditComponent
    ],
    imports: [
        Sharedmodule,
        FormsModule,
        RouterModule.forChild(routes)
    ]
})
export class ShoppinListModule {}