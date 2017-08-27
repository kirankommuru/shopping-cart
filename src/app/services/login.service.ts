import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { User } from './user';

@Injectable()
export class LoginService {
	url = "http://localhost:8080/login";
	constructor(private http:Http) { }
     
	login(user:User): Observable<User> {
	    let headers = new Headers({ 'Content-Type': 'application/json' });
		
		headers.append('Access-Control-Expose-Headers', 'Authorization') 
        headers.append("Access-Control-Allow-Origin", "http://localhost:8080/login");
        headers.append("Access-Control-Allow-Methods", "*");
        headers.append("Access-Control-Allow-Headers", "Accept,Accept-Charset,Accept-Encoding,Accept-Language,Authorization,Connection,Content-Type,Cookie,DNT,Host,Keep-Alive,Origin,Referer,User-Agent,X-CSRF-Token,X-Requested-With");
        headers.append("Access-Control-Allow-Credentials", "true");
		
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.url, user, options)
                   .map(this.extractData)
                   .catch(this.handleErrorObservable);
	}
   	
	private extractData(res: Response) {
	    let body = res.json();
        return body;
    }
    private handleErrorObservable (error: Response | any) {
		console.error(error.message || error);
		return Observable.throw(error.message || error);
    }
     	
}