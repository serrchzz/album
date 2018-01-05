import { RouterModule, Routes } from '@angular/router';

import {
  AboutComponent,
  AlbumComponent,
  ProductoComponent
} from "./components/index.paginas";

const app_routes: Routes =[
    { path: 'home', component: AlbumComponent },
    { path: 'about', component: AboutComponent },
    { path: 'producto', component: ProductoComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
  ];

  export const app_routing = RouterModule.forRoot(app_routes, { useHash:true });
