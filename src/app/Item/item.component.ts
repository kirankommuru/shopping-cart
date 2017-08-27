import { Component, OnInit,Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemService } from '../services/item.service';
import { Item } from '../services/item';
import {CacheService, CacheStoragesEnum} from 'ng2-cache/ng2-cache';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
providers: [ CacheService ]  
})
export class ItemComponent{ 
		@Input() public name;
		@Input() public price;
		@Input() public description;
		@Input() public img;
		@Input() public id;
		cartItems: Item[] = [];

		constructor(private itemService: ItemService,private _cacheService: CacheService) { }
		
		addItemInCart(id:number): void {
		
	    this.itemService.addItem(id);
		
		let items= this._cacheService.get('selectedItems');
		 
        this.cartItems = this.itemService.getSelectedItems();
        
        if(this.cartItems!=null && this.cartItems.length===1 && items!=null){
        	  items.forEach((obj) => {
				this.cartItems.push(obj);
		});
        }
		console.log("Test>>>>>>>>"+(this.cartItems).length);
		this._cacheService.set('selectedItems', this.cartItems);
		if(this.cartItems.length>0){
			this._cacheService.set('noOfProds', this.cartItems.length);
		}
		
   
   }
   }
   
   
    

    