import { Component, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GlobalVariable } from '../../common/global';
import { HttpServices } from '../../services/http.services';
import { ModalServices } from '../../services/modal.services';
import { AlertServices } from '../../services/alert.services';
import { TokenControlServices } from '../../services/tokencontrol.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  title = 'app';
  userList: any = [];
  errorMessage: any = '';
  strings: any = [];
  userSettings: any = {};
  @ViewChild('content') private content;
  constructor(private translate: TranslateService, 
    private httpService: HttpServices, 
    private modalService: ModalServices,
    private alertService: AlertServices,
    private router: Router,
    private tokenService: TokenControlServices ) {

      this.userSettings = GlobalVariable.USER_SETTINGS; 
      tokenService.isExists("user").then((data:any) => {
        switch(data) {
          case 300:
           this.router.navigate(['login']);
          break;
          case 400:
           this.router.navigate(['user']);
          break;
          default:
          this.router.navigate(['login']);
        }

      });

    this.getUserList();

    this.modalService._eventListener.subscribe((result) => {
     switch(result.result){
       case 'onConfirm':
       this.deleteUser(result.id);
       break;
       case 'onDismiss':
       // close dialog
       break;
     }
    });
  }
  
  getUserList() {
    this.httpService.sendGetRequest(GlobalVariable.BASE_API_URL + GlobalVariable.LIST_USER_PATH ).subscribe(
      result => {

        if(result.data) {
          this.userList = result.data;
        } else {
          this.errorMessage = result ? result : 'Token Not Received';
        }

      }, 
      err => {
          this.errorMessage = err;
      });
  }

  onDeleteClick(user: any) {
    this.modalService.openModal({id:user.id,title:"Kullanıcı Silinecek", body: "Kullanıcıyı silmek istediğinizden emin misiniz ?"});
  }

  deleteFromArray(id) {
    return new Promise((resolve) => {
      let isExists = false;
      for (let i = 0;i < this.userList.length; ++i){
        if(this.userList[i].id == id){
          this.userList.splice(i,1);
          isExists = true;
          resolve({response:200, message: "operation successful"});
        }
      }

      if(!isExists) {
        resolve({response:300, message: "operation failed!"});
      }

    });
  }

  deleteUser(id:any){
    this.httpService.sendGetRequest(GlobalVariable.BASE_API_URL + GlobalVariable.DELETE_USER_PATH ).subscribe(
      result => {

        if(result.data) {
          this.deleteFromArray(id).then((response: any) => {
            switch(response.response){
              case 200:
              this.alertService.sendAlert({title:"İşlem Başarılı", message:"Kullanıcı Silindi !", delay:200, duration:3000, alertType: "success"});
              break;
              case 300:
              this.alertService.sendAlert({title:"İşlem Başarısız", message:"Kullanıcı Silinemedi !", delay:200, duration:3000, alertType: "warning"});
              break;
            }
          });
        } else {
          this.errorMessage = result ? result : 'Token Not Received';
        }

      }, 
      err => {
          this.errorMessage = err;
      });
  }

  editUser(user) {
    this.router.navigate(['edit', user]);
  }


}
