import { Injectable } from '@angular/core';
import { GlobalVariable } from '../common/global';

@Injectable()
export class TokenControlServices {

    constructor() {

    }

    isExists(route): Promise<any> {
        return new Promise((resolve) => {
            if(GlobalVariable.USER_SETTINGS.token) {
                
                if((route == "create" || route == "edit") && GlobalVariable.USER_SETTINGS.user_type == 'admin') {
                    resolve(200);
                } else {
                    resolve(400);
                }

            } else {
                resolve(300);
            }
        });
    }
}