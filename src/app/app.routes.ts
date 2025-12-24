import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'Brio-Net | Nettoyage de vitres en hauteur depuis 2003'
  },
  {
    path: 'privacy',
    loadComponent: () => import('./pages/privacy/privacy.component').then(m => m.PrivacyComponent),
    title: 'Politique de confidentialité | Brio-Net'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
