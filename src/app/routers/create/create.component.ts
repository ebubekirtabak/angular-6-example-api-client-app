import { Component, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GlobalVariable } from '../../common/global';
import { HttpServices } from '../../services/http.services';
import { AlertServices } from '../../services/alert.services';
import { TokenControlServices } from '../../services/tokencontrol.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

    nameInput:any = '';
    jobInput:any = '';
    errorMessage:any = '';
    constructor(private httpService: HttpServices,
    private alertService: AlertServices,
    private router: Router,
    private tokenService: TokenControlServices) {
      tokenService.isExists("create").then((data) => {
        switch(data) {
          case 300:
           this.router.navigate(['login']);
          break;
          case 400:
           this.router.navigate(['user']);
          break;
        }
    });
    }

    createUser() {
      this.httpService.sendRequest(GlobalVariable.BASE_API_URL + GlobalVariable.CREATE_USER_PATH, {name: this.nameInput, job: this.jobInput} ).subscribe(
        result => {
  
          if(result.id) {
            this.alertService.sendAlert({title:"İşlem Başarılı", message:"Kullanıcı Oluşturuldu!", delay:200, duration:3000, alertType: "success"});
          } else {
            this.errorMessage = result ? result : 'Operation failed!';
          }
  
        }, 
        err => {
            this.errorMessage = err;
        });
    }
    
}    