import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeService } from './recipes/recipe.service';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { Sharedmodule } from './shared/shared.module';




@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Sharedmodule,
  ],
  providers: [
    ShoppingListService,  
    RecipeService, 
    {provide: HTTP_INTERCEPTORS, 
     useClass: AuthInterceptorService,
     multi: true},
     { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
