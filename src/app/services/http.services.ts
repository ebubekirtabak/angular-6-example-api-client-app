import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Http, Response, Headers, RequestOptions   } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/share';
import 'rxjs/Rx';
declare var $: any;
@Injectable()
export class HttpServices{
    options:any
    constructor(public http:Http){
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        this.options = new RequestOptions({ headers: headers }); // Create a request option
    }

    sendRequest(url: any, body: Object): Observable<any>  {

        let bodyString = JSON.stringify(body);
        return this.http.post(url, body, this.options)
                    .share()
                    .map((res:Response) => res.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    }

    sendGetRequest(url: any): Observable<any>  {
 
        return this.http.get(url)
                    .share()
                    .map((res:Response) => res.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    }

    sendPutRequest(url: any, body: Object): Observable<any> {

        let bodyString = JSON.stringify(body);
        return this.http.put(url, body, this.options)
                    .share()
                    .map((res:Response) => res.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    }

 } 