import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '@art-catalogue/env/environment';
import { Movie, Movies } from '../interfaces';
import { pipe } from 'fp-ts/lib/pipeable';
import { fold, left } from 'fp-ts/lib/Either';
import * as t from 'io-ts';
import { PathReporter } from 'io-ts/lib/PathReporter';

@Injectable()
export class GalleryService {
    private apiUrl = environment.authUrl;

    constructor(private http: HttpClient) {
    }

    getAllMovies(): Observable<Movie[]> {
        return this.http.get(`${this.apiUrl}/movies`)
            .pipe(
                // map(this.validate),
                map(r => r as Movie[])
            );
    }


    validate(resp: any): Movies {
        const onLeft = (errors: t.Errors) => {
            console.log(errors[0].context)
            console.error(PathReporter.report(left(errors)).join('\n'));
            return false;
        };

        const onRight = (data) => {
            return true;
        };

        return resp.filter((movie: Movie) => {
            return pipe(
                Movie.decode(movie),
                fold(onLeft, () => true)
            );
        });
    }
}
