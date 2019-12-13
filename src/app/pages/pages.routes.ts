import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SupportComponent } from './support/support.component';





const pagesRoutes: Routes = [
    // {
        // path: '',
        // component: PagesComponent,
        // canActivate: [ LoginGuardGuard ],
        // children: [
            {
                path: 'home',
                component: HomeComponent,
                // canActivate: [VerificaTokenGuard],
                data: { titulo: 'Home' }
            },
            {
                path: 'support',
                component: SupportComponent,
                // canActivate: [VerificaTokenGuard],
                data: { titulo: 'Soporte técnico' } },
            { path: '', redirectTo: '/home', pathMatch: 'full' },
        // ]
    // }
];

// se usa el forchild cuando es una router dentro de otro router
export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
