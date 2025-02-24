import { Routes } from '@angular/router';

export const routes: Routes = [ 
  { 
    path: 'home/principal', loadComponent: () => import('./pages/home-pages/home-pages.component').then(m => m.HomePagesComponent),
    children: [
        {
          path: '', // Rota padrão do home
          loadComponent:() => import('./pages/home-pages/HomePages/home-body/home-body.component').then(m => m.HomeBodyComponent),
          children: [
            {
              path: 'eventos', // Rota padrão do home
                loadComponent:() => import('./pages/home-pages/HomePages/home-body/HomeBodyComponents/home-eventos/home-eventos.component').then(m => m.HomeEventosComponent)
            },
            {
              path: 'posts', // Rota padrão do home
                loadComponent:() => import('./pages/home-pages/HomePages/home-body/HomeBodyComponents/home-posts/home-posts.component').then(m => m.HomePostsComponent)
            }],
        },
    ]},
    {path: '**', redirectTo: 'home/principal/eventos'}];
