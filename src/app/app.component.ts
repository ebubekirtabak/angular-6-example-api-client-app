import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TokenControlServices } from './services/tokencontrol.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private translate: TranslateService,
  private tokenService: TokenControlServices,
  private router: Router) {
    translate.setDefaultLang('en');

    tokenService.isExists("app").then((data:any) => {
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

  }

}
