import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../services/item';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'landing-app',
  templateUrl: './landing.component.html' 
})
export class LandingComponent  { 
   
   constructor(private itemService: ItemService) { }
    
}
    