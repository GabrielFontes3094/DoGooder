import { Routes } from '@angular/router';

export const routes: Routes = [ 
  { 
    path: 'home/eventos', loadComponent: () => import('./pages/home-pages/home-pages.component').then(m => m.HomePagesComponent),
    children: [
        {
          path: '', // Rota padrão do home
          loadComponent:() => import('./pages/home-pages/HomePages/home-body/home-body.component').then(m => m.HomeBodyComponent),
          children: [
            {
              path: '', // Rota padrão do home
                loadComponent:() => import('./pages/home-pages/HomePages/home-body/HomeBodyComponents/home-eventos/home-eventos.component').then(m => m.HomeEventosComponent)
            }]
          
        },
    ]},
    {path: '**', redirectTo: 'home/eventos'}];
