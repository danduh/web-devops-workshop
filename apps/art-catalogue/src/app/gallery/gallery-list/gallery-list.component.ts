import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GalleryService } from '../gallery.service';

@Component({
    selector: 'art-catalogue-gallery-list',
    templateUrl: './gallery-list.component.html',
    styleUrls: ['./gallery-list.component.scss']
})
export class GalleryListComponent implements OnInit {

    public movies: Observable<any[]>;

    constructor(private galService: GalleryService) {
    }

    ngOnInit() {
        this.movies = this.galService.getAllMovies();
    }

}
