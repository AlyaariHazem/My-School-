import { Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { adminGuardGuard } from './core/guards/admin-guard.guard';

export const routes: Routes = [
    {
        path:'',
        component:LoginComponent
    },
    {
        path:'admin',
        loadChildren: ()=> import('./components/admin/admin.module').then(m=> m.AdminModule),
        canMatch:[adminGuardGuard]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
    
];
