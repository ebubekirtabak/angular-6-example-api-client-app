import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './routers/login/login.component';
import { UserComponent } from './routers/user/user.component';
import { CreateComponent } from './routers/create/create.component';
import { EditComponent } from './routers/edit/edit.component';


const appRoutes: Routes = [
    { path: '', component: UserComponent },
    { path: 'login', component: LoginComponent },
    { path: 'user', component: UserComponent },
    { path: 'create', component: CreateComponent },
    { path: 'edit', component: EditComponent },
 
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
 
export const routing = RouterModule.forRoot(appRoutes);
