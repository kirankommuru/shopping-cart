import { Component, OnInit } from '@angular/core';
import { Item } from '../services/item';
import { ItemService } from '../services/item.service';
import { LoginService } from '../services/login.service';
import { User } from '../services/user';
import {CacheService, CacheStoragesEnum} from 'ng2-cache/ng2-cache';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
 

@Component({
  selector: 'login',
  templateUrl: './login.component.html',  
  providers: [ CacheService,FormsModule,LoginService]
})
export class LoginComponent implements OnInit { 
   userName:string = "";
   pswd:string = "";
   users: User[];
   errorMessage: String;
   firstName: string;
   lastName: string;
   user = new User();  
   constructor(private itemService: ItemService,private _cacheService: CacheService,private loginService: LoginService,private router: Router) { 
   
   }
   ngOnInit(): void {
       console.log("username:::"+this.userName);
	   console.log("password:::"+this.pswd);
   }    
   
   login(): void {
	   this.user.userName = this.userName;
	   this.user.password = this.pswd;
     this.loginService.login(this.user)
	     .subscribe( user => {
					       		this.userName = user.userName;
								this.firstName =user.firstName;
								this.lastName = user.lastName;
								console.log("FirstName>>>>>>>>"+this.firstName);
								console.log("LastName>>>>>>>>"+this.lastName);
								
								 if(this.firstName!==null && this.lastName!==null && this.firstName!=="" ){
									  localStorage.removeItem('currentUser');
						  localStorage.setItem('currentUser', JSON.stringify(user));
						  
						  
					 }
					  },
                     error => this.errorMessage = <any>error);
					 
					
   }
   
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
   
    
   
    
}
    