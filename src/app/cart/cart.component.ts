import { Component, OnInit } from '@angular/core';
import { Item } from '../services/item';
import { ItemService } from '../services/item.service';
import {CacheService, CacheStoragesEnum} from 'ng2-cache/ng2-cache';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule,Modal } from 'angular2-modal/plugins/bootstrap';
@Component({
  selector: 'cart-app',
  templateUrl: './cart.component.html', 
 
  providers: [ CacheService,Modal,ModalModule, BootstrapModalModule]
})
export class CartComponent implements OnInit { 
   //@Input() Item[]: [];
   cartItems: Item[] = [];
   total:number = 0;
   currentUser: any;
   constructor(private itemService: ItemService,private _cacheService: CacheService,public modal: Modal) { 
   this.cartItems = this._cacheService.get('selectedItems');
   }
   getItemsForCart(): void {
        this.cartItems = this.itemService.getSelectedItems();
		console.log(this.cartItems);
   }
   ngOnInit(): void {
        this.cartItems = this._cacheService.get('selectedItems');
	  console.log(">>>>>>>>>>"+this.cartItems);
   }
   removeItemFromCart(id:number): void {
        this.itemService.removeItem(id);
   }
   
   calculate(inputVal:number,price:number,item: any){
	   item.total = (inputVal)*(price);
   }
   
    modalPop() {
		this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
		let popMessage = "";
		if(this.currentUser===null){
			popMessage = "<h4>Please Login to proceed Checkout.</h4><ul><li>Proceed to  <a href='/login' >Login</a></li> </ul>"
		}else{
		popMessage =	"<h4>Thank you "+this.currentUser.firstName+"</h4>"+
            "<b>your products will be delivered to the below mentioned Address</b>"+
            "<ul>"+
		"<b>"+this.currentUser.address.flatNo+
                "<p>"+this.currentUser.address.city+"<br/>"+
                  this.currentUser.address.state+"<br/> "+
                this.currentUser.address.country+"<br/><b>"+
				"<h4>Please confirm by Clicking ok button</h4>";
		}
    this.modal.alert()
        .size('lg')
        .showClose(true)
        .title('proceed to CheckOut')
        .body(popMessage)
        .open()
  }
   
   getTotal():number{
	   let total =0;
	   this.cartItems.forEach((obj) => {
		total = total+obj.total;
		});
		return total;
		}
}
    