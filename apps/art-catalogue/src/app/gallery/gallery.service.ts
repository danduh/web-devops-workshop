import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '@art-catalogue/env/environment';

@Injectable()
export class GalleryService {
    private apiUrl = environment.authUrl;

    constructor(private http: HttpClient) {
    }

    getAllMovies(): Observable<any[]> {
        return this.http.get(`${this.apiUrl}/movies`)
            .pipe(
                map((response) => response as any[])
            );
    }
}
