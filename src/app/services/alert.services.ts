import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class AlertServices {
    sendAlert$: Observable<any>;
    private _listners = new Subject<any>();
    public _eventListener = new Subject<any>();

    constructor(){
        this.sendAlert$ = this._listners.asObservable();
    }

    listen(): Observable<any> {
       return this._listners.asObservable();
    }

    eventListener(data) {
        this._eventListener.next(data);
    } 
    
    sendAlert(data){
        this._listners.next(data);
    }

}