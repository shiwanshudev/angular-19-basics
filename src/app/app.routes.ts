import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { AdminComponent } from './components/admin/admin.component';

export const routes: Routes = [
  { path: 'user-page', component: UserComponent },
  { path: 'admin', component: AdminComponent },
];
