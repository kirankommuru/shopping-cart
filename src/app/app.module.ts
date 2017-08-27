import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {NgModule}      from '@angular/core';

import {StoreComponent}  from './store/store.component';
import {CartComponent}  from './cart/cart.component';
import {ItemComponent}  from './item/item.component';
import {ItemDetailComponent}  from './detail/item.detail.component';
import {LandingComponent}  from './landing/landing.component';
import {LoginComponent}  from './login/login.component';
import { FormsModule } from '@angular/forms';
import {AppComponent}  from './app.component';
import { ItemService } from './services/item.service';
import { LoginService } from './services/login.service';
import {Routes, RouterModule} from '@angular/router';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule,Modal } from 'angular2-modal/plugins/bootstrap';

export const appRoutes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'details/:id',      component: ItemDetailComponent },
  { path: 'shop',      component: LandingComponent },
   { path: 'login',      component: LoginComponent },
  { path: 'cart',      component: CartComponent }
];

@NgModule({
  imports: [     
        BrowserModule,
		HttpModule,
		FormsModule,
		ModalModule.forRoot(),
		BootstrapModalModule,
		RouterModule.forRoot(
      appRoutes
      
    )
  ],
  declarations: [
        AppComponent, 
		ItemComponent,
		ItemDetailComponent,
		LandingComponent,
		StoreComponent,
		CartComponent,
		LoginComponent
  ],
  providers: [
        ItemService
  ],
  bootstrap: [
        AppComponent
  ]
})
export class AppModule { }
