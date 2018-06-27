import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GlobalVariable } from '../../common/global';
import { HttpServices } from '../../services/http.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  title = 'app';
  emailInput:any = '';
  passwordInput:any = '';
  errorMessage:any = '';
  languages: any = [];
  userTypes: any [];

  constructor(private translate: TranslateService, private httpService: HttpServices, private router: Router) {
    translate.setDefaultLang('en');
    this.languages = GlobalVariable.languages;
    this.userTypes = GlobalVariable.user_types;
  }
  
  loginApp() {
    
    this.httpService.sendRequest(GlobalVariable.BASE_API_URL + GlobalVariable.LOGIN_PATH,{email:this.emailInput, password: this.passwordInput}).subscribe(
      result => {

        if(result.token) {
          this.router.navigate(['/user']);
          GlobalVariable.USER_SETTINGS.token = result.token;
        } else {
          this.errorMessage = result ? result : 'Token Not Received';
        }

      }, 
      err => {
          this.errorMessage = err;
      });

  }

  onChangeLanguage(lang) {
    this.translate.setDefaultLang(lang);
    GlobalVariable.USER_SETTINGS.lang = lang;
  }

  onChangeUserType(type) {
    GlobalVariable.USER_SETTINGS.user_type = type;
  }

}
