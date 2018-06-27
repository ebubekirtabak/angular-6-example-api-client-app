import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GlobalVariable } from '../../common/global';
import { HttpServices } from '../../services/http.services';
import { AlertServices } from '../../services/alert.services';
import { TokenControlServices } from '../../services/tokencontrol.services';
import { ActivatedRoute, Params , Router} from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

    nameInput:any = '';
    jobInput:any = '';
    errorMessage:any = '';
    user: any;
    constructor(private httpService: HttpServices,
    private alertService: AlertServices,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private tokenService: TokenControlServices) {
        tokenService.isExists("edit").then((data) => {
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


    ngOnInit() {
      this.activatedRoute.params.subscribe((params: Params) => {
          this.nameInput = params['first_name'];
          this.jobInput = params['last_name'];
          this.user = params;
        });
    }

    updateUser() {
      this.httpService.sendPutRequest(GlobalVariable.BASE_API_URL + GlobalVariable.CREATE_USER_PATH, {id: this.user.id, name: this.nameInput, job: this.jobInput} ).subscribe(
        result => {
  
          if(result.id) {
            this.alertService.sendAlert({title:"İşlem Başarılı", message:"Kullanıcı Güncellendi!", delay:200, duration:3000, alertType: "success"});
          } else {
            this.errorMessage = result ? result : 'Operation failed!';
          }
  
        }, 
        err => {
            this.errorMessage = err;
        });
    }
    
}    