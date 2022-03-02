import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { map } from 'rxjs/operators';
import { Movie } from './interfaces';
import { pipe } from 'fp-ts/lib/pipeable';
import { fold } from 'fp-ts/lib/Either';

describe('Service', () => {
    beforeEach(async(() => {
    }));

    it('check response', (done) => {
        const onLeft = (error) => {
            done.fail(error);
        };

        const onRight = (movie) => {
            done()
        }

        this.http.get(`${this.apiUrl}/movies/${2107609}`)
            .pipe(
                map(r => r as Movie)
            )
            .subscribe((movie) => {
                pipe(
                    Movie.decode(movie),
                    fold(onLeft, onRight)
                );
            });

    });

});
