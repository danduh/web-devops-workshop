import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryListComponent } from './gallery-list/gallery-list.component';
import { galleryRoutes } from './gallery.routes';

@NgModule({
    declarations: [
        GalleryListComponent
    ],
    imports: [
        galleryRoutes,
        CommonModule
    ]
})
export class GalleryModule {
}
