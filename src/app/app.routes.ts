import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'products/:id', loadComponent: () => import('./product/product.component').then(m => m.ProductComponent) }
];