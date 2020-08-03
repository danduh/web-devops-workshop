import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryListComponent } from './gallery-list/gallery-list.component';
import { galleryRoutes } from './gallery.routes';
import { GalleryService } from './gallery.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [
        GalleryListComponent
    ],
    imports: [
        MatButtonModule,
        MatCardModule,
        galleryRoutes,
        CommonModule
    ],
    providers: [
        GalleryService
    ]
})
export class GalleryModule {
}
