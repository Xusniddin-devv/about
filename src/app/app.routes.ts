import { Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        loadComponent: () => import('./features/home/home').then(m => m.Home),
      },
      {
        path: 'about',
        loadComponent: () => import('./features/about/about').then(m => m.About),
      },
      {
        path: 'about/legal-status',
        loadComponent: () => import('./features/legal-status/legal-status').then(m => m.LegalStatus),
      },
      {
        path: 'about/structure',
        loadComponent: () => import('./features/structure/structure').then(m => m.Structure),
      },
      {
        path: 'about/leadership',
        loadComponent: () => import('./features/leadership/leadership').then(m => m.Leadership),
      },
      {
        path: 'about/executive',
        loadComponent: () => import('./features/executive/executive').then(m => m.Executive),
      },
      {
        path: 'about/advisors',
        loadComponent: () => import('./features/advisors/advisors').then(m => m.Advisors),
      },
      {
        path: 'about/system-enterprises',
        loadComponent: () => import('./features/system-enterprises/system-enterprises').then(m => m.SystemEnterprises),
      },
      {
        path: 'about/vacancies',
        loadComponent: () => import('./features/vacancies/vacancies').then(m => m.Vacancies),
      },
      {
        path: 'news',
        loadComponent: () => import('./features/news/news').then(m => m.News),
      },
      {
        path: 'news/:id',
        loadComponent: () => import('./features/news/news-detail').then(m => m.NewsDetail),
      },
      {
        path: 'tenders',
        loadComponent: () => import('./features/tenders/tenders').then(m => m.Tenders),
      },
      {
        path: 'tenders/:id',
        loadComponent: () => import('./features/tenders/tender-detail').then(m => m.TenderDetail),
      },
      {
        path: 'gallery',
        loadComponent: () => import('./features/gallery/gallery').then(m => m.Gallery),
      },
      {
        path: 'contacts',
        loadComponent: () => import('./features/contacts/contacts').then(m => m.Contacts),
      },
      { path: '**', redirectTo: '' },
    ],
  },
];
