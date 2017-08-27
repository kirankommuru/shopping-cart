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
 hideCart: boolean = false;
 productsSize: number =0;
 currentUser: User;
   constructor(private itemService: ItemService,private _cacheService: CacheService,private router: Router) {
	console.log("cart length>>>>"+this.cartItems.length);
	 this.ngOnInit();
	this.cartItems  = this._cacheService.get('selectedItems');
	
   }
   
   getItemsForCart(): void {
   		this.cartItems  = this._cacheService.get('selectedItems');
        //this.cartItems = this.itemService.getSelectedItems();
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
	
	naigateToCart(){
	this.hideCart = true;
		this.router.navigate(["/cart"]);
		
	} 
	
	cartLen():number{
	let len:number =0;
		if( this._cacheService.get('selectedItems')!=null){
			len = this._cacheService.get('selectedItems').length;
		}
		return len;
	}
		
}
    