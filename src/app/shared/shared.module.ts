import { NgModule } from "@angular/core";
import { AlertComponent } from "./alert/alert.component";
import { Alert2Component } from "./alert2/alert2.component";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { DropdownDirective } from "./dropdown.directive";
import { CommonModule } from "@angular/common";



@NgModule({
    declarations: [
        AlertComponent,
        Alert2Component,
        LoadingSpinnerComponent,
        DropdownDirective,
        
    ],
    imports: [
        CommonModule
    ],
    exports: [
        AlertComponent,
        Alert2Component,
        LoadingSpinnerComponent,
        DropdownDirective,
        CommonModule,
        
    ]
})
export class Sharedmodule{

}