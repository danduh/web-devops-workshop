import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryListComponent } from './gallery-list/gallery-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: GalleryListComponent
    }
];

export const galleryRoutes: ModuleWithProviders = RouterModule.forChild(routes);
