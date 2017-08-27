import { Component, OnInit,Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../services/item';
import { ItemService } from '../services/item.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'item-detail',
  templateUrl: './item.detail.component.html', 
  styleUrls: ['./item.detail.component.css']
})
export class ItemDetailComponent implements OnInit { 
    id1: any ="";
   storeItems: Item[] = [];
   errorMessage: string;
   item: any= null;
   constructor(private itemService: ItemService,private route: ActivatedRoute) { }
   getStoreItems(): void {
	    this.itemService.getItems().subscribe(
		          data => this.storeItems = data,
				  error =>  this.errorMessage = <any>error);
   }
   
   ngOnInit(): void {
        this.getStoreItems();
		this.route.params.subscribe(params => {
				this.id1 = params['id'];    
		});
	
	 let itemIndex = this.storeItems.indexOf(this.id1);
	 //this.item = this.storeItems[itemIndex];
		console.log("Test>>>"+this.storeItems);
   }
   addItemInCart(id:number): void {
	    this.itemService.addItem(id);
   }
}
    