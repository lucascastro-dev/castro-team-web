import { Routes } from '@angular/router';
import { GeradorCertificadosComponent } from './pages/certificados/gerador-certificados.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/certificados',
    pathMatch: 'full'
  },
  {
    path: 'certificados',
    component: GeradorCertificadosComponent
  }
];
