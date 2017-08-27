import { Component,OnInit } from '@angular/core';
import { ItemService } from './services/item.service';
import { Item } from './services/item';
import {CacheService, CacheStoragesEnum} from 'ng2-cache/ng2-cache';
import { Router } from '@angular/router';
import { User } from './services/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component-template.html', 
  providers: [ CacheService ]
})
export class AppComponent implements OnInit{ 
  cartEnable: boolean = false;
 cartItems: Item[] = [];
 productsSize: number =0;
 currentUser: User;
   constructor(private itemService: ItemService,private _cacheService: CacheService) {
	console.log("cart length>>>>"+this.cartItems.length);
	 this.ngOnInit();
	
	
   }
   
   getItemsForCart(): void {
        this.cartItems = this.itemService.getSelectedItems();
		console.log("t1"+this.cartItems);
		
   }
   
   setStatus(){
	 this.cartItems = this._cacheService.get('selectedItems');
   }
   ngOnInit(): void {
          this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
		  
		  //console.log("current user::::"+this.currentUser.firstName);
		  this.cartItems = this._cacheService.get('selectedItems');
		
   }
   
   getWelcomeMsg():string{
	   let welcomeMsg = "Your Account";
	   if(this.currentUser!==null && this.currentUser.firstName!==null && this.currentUser.lastName!==null){
		   welcomeMsg =  "Welcome "+ this.currentUser.firstName +" "+ this.currentUser.lastName;
	   }
	   return welcomeMsg;
   }
   
   logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
		this._cacheService.set('selectedItems',null);
		//this.getWelcomeMsg();
    }
	
	 
	
}
    