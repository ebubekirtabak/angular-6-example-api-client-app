import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';
import { LoginComponent } from './routers/login/login.component';
import { UserComponent} from './routers/user/user.component';
import { CreateComponent } from './routers/create/create.component';
import { EditComponent } from './routers/edit/edit.component';
import { ModalComponent } from './components/modal/modal.component';
import { AlertComponent } from './components/alert/alert.component';
import { NavBarComponent } from './components/navbar/navbar.component';
import { HttpServices } from './services/http.services';
import { ModalServices } from './services/modal.services'; 
import { AlertServices } from './services/alert.services'; 
import { TokenControlServices } from './services/tokencontrol.services';
import { User } from './model/User';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    CreateComponent,
    EditComponent, 
    ModalComponent,
    AlertComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  }),
  routing
  ],
  exports: [RouterModule],
  providers: [HttpServices, ModalServices, AlertServices, TokenControlServices],
  bootstrap: [AppComponent],
  entryComponents: [AlertComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}