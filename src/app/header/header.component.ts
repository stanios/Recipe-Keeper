import { Component, OnDestroy, OnInit } from "@angular/core";
import { DataStorageService } from "../shared/data-storage.service";
import { AuthService } from "../auth/auth.service";
import { Subscription } from "rxjs";


@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy{
    private userSub: Subscription;
    collapsed = true;
    isAuthenticated = false;
    success = false;


    constructor(
        private dataStorageService: DataStorageService, 
        private authService: AuthService
        ){}

    ngOnInit(): void {
        this.userSub = this.authService.user$.subscribe(user => {
            this.isAuthenticated = !user ? false : true;
        })
    }
    onLogout() {
        this.authService.logout()
    }
    
    onSaveData(){
        this.dataStorageService.storeRecipes().subscribe(response => {
            if(response) {
                console.log(response)
                this.success = true;
            }
        })
        
    }

    onFetchData() {
        this.dataStorageService.fetchRecipes().subscribe()
        
    }

    onHandlError() {
        this.success = false;
    }

    ngOnDestroy(): void {
        this.userSub.unsubscribe();
    }

}