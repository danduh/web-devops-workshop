import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GalleryService } from '../gallery.service';
import { Movie, Movies } from '../../interfaces';

@Component({
    selector: 'art-catalogue-gallery-list',
    templateUrl: './gallery-list.component.html',
    styleUrls: ['./gallery-list.component.scss']
})
export class GalleryListComponent implements OnInit {

    public movies: Observable<Movies>;

    constructor(private galService: GalleryService) {
    }

    ngOnInit() {
        this.movies = this.galService.getAllMovies();
    }

}
