import { Component } from '@angular/core';
import { GlobalVariable } from '../../common/global';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
selector: "nav-bar",
templateUrl: './navbar.component.html',
styleUrls: ['./navbar.component.scss']
})
export class NavBarComponent {
    languages: any = [];
    constructor(private translateService: TranslateService,
    private router: Router) {
        this.languages = GlobalVariable.languages;
    }

    onSelectLanguage(lang: any) {
        this.translateService.setDefaultLang(lang.value);
    }
    logOut() {
        GlobalVariable.USER_SETTINGS.token = "";
        this.router.navigate(['login']);
    }

}