import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'authorization',
        loadComponent: () => import('./pages/authorization/authorization.component').then(m => m.AuthorizationComponent),
    }
];
