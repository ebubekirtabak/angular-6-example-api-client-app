import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class ModalServices {
    openModal$: Observable<any>;
    private _listners = new Subject<any>();
    public _eventListener = new Subject<any>();

    constructor(){
        this.openModal$ = this._listners.asObservable();
    }

    listen(): Observable<any> {
       return this._listners.asObservable();
    }

    eventListener(data) {
        this._eventListener.next(data);
    } 
    
    openModal(data){
        data = JSON.stringify(data);
        this._listners.next(data);
    }

}