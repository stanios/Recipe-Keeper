import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AuthComponent } from "./auth.component";
import { RouterModule } from "@angular/router";
import { Sharedmodule } from "../shared/shared.module";
import { WelcomeAlertComponent } from './welcome-alert/welcome-alert.component';

@NgModule({
    declarations: [AuthComponent, WelcomeAlertComponent],   
    imports: [
        CommonModule,
        FormsModule, 
        RouterModule.forChild([{ path: '', component: AuthComponent }]),
        Sharedmodule
]

})
export class AuthModule {}