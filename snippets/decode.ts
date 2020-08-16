// /* jslint:disable */
//
// // import { Movie } from './movies';
// import { Validation } from 'io-ts';
//
// const movieJson: unknown = {
//     'multilingualName': [],
//     'multilingualDescription': [],
//     'images': [
//         {
//             'id': 169794,
//             'version': '0',
//             'imageTypeId': 258,
//             'imageObjectId': 2107519,
//             'imageObjectType': 'MEDIA_ASSET',
//             'status': 'READY',
//             'url': 'https://images.frs1.ott.kaltura.com/service.svc/GetImage/p/3200/entry_id/36cb2e0322584913a1c937bdecbb7a6b/version/0',
//             'contentId': '36cb2e0322584913a1c937bdecbb7a6b',
//             'isDefault': false
//         }
//     ],
//     'id': 2107519,
//     'description': 'MK Ad-Insertion Tests,A collection of twentysomethings try to cope with relationships, loneliness, desire and their individual neuroses.',
//     'metas': {
//         'Year': {
//             '_allowedEmptyArray': [],
//             '_dependentProperties': {},
//             'relatedObjects': [],
//             'value': 1987,
//             'objectType': 'KalturaDoubleValue'
//         },
//         'Adult': {
//             '_allowedEmptyArray': [],
//             '_dependentProperties': {},
//             'relatedObjects': [],
//             'value': false,
//             'objectType': 'KalturaBooleanValue'
//         },
//         'Downloadable': {
//             '_allowedEmptyArray': [],
//             '_dependentProperties': {},
//             'relatedObjects': [],
//             'value': false,
//             'objectType': 'KalturaBooleanValue'
//         },
//         'CatalogStartDateTime': {
//             '_allowedEmptyArray': [],
//             '_dependentProperties': {},
//             'relatedObjects': [],
//             'value': 1594329960,
//             'objectType': 'KalturaLongValue'
//         },
//         'PlaybackEndDateTime': {
//             '_allowedEmptyArray': [],
//             '_dependentProperties': {},
//             'relatedObjects': [],
//             'value': 32472151200,
//             'objectType': 'KalturaLongValue'
//         }
//     },
//     'tags': {
//         'ParentalRating': {
//             '_allowedEmptyArray': [],
//             '_dependentProperties': {},
//             'relatedObjects': [],
//             'objects': [
//                 {
//                     '_allowedEmptyArray': [],
//                     '_dependentProperties': {},
//                     'relatedObjects': [],
//                     'multilingualValue': [],
//                     'value': '10'
//                 }
//             ]
//         },
//         'Actors': {
//             '_allowedEmptyArray': [],
//             '_dependentProperties': {},
//             'relatedObjects': [],
//             'objects': [
//                 {
//                     '_allowedEmptyArray': [],
//                     '_dependentProperties': {},
//                     'relatedObjects': [],
//                     'multilingualValue': [],
//                     'value': 'Ben, Affleck'
//                 }
//             ]
//         },
//         'Director': {
//             '_allowedEmptyArray': [],
//             '_dependentProperties': {},
//             'relatedObjects': [],
//             'objects': [
//                 {
//                     '_allowedEmptyArray': [],
//                     '_dependentProperties': {},
//                     'relatedObjects': [],
//                     'multilingualValue': [],
//                     'value': 'Risa, Bramon Garcia'
//                 }
//             ]
//         },
//         'Genre': {
//             '_allowedEmptyArray': [],
//             '_dependentProperties': {},
//             'relatedObjects': [],
//             'objects': [
//                 {
//                     '_allowedEmptyArray': [],
//                     '_dependentProperties': {},
//                     'relatedObjects': [],
//                     'multilingualValue': [],
//                     'value': 'Comedy'
//                 }
//             ]
//         },
//         'Studio': {
//             '_allowedEmptyArray': [],
//             '_dependentProperties': {},
//             'relatedObjects': [],
//             'objects': [
//                 {
//                     '_allowedEmptyArray': [],
//                     '_dependentProperties': {},
//                     'relatedObjects': [],
//                     'multilingualValue': [],
//                     'value': 'Disney'
//                 }
//             ]
//         }
//     },
//     'startDate': 1594329960,
//     'endDate': 32472151200,
//     'createDate': 1594553905,
//     'updateDate': 1594574198,
//     'externalId': '2_MK_AD_19052020_MM',
//     'entryId': '',
//     'status': true,
//     'struct': {
//         'id': 1109,
//         'name': 'Movie',
//         'systemName': 'Movie',
//         'metaIds': '4077,4084,4085,4086,4087,4088,4076,4083,4082,4095,4096,4269,4275,5906,4258,5907,4259,4263,5909,5910,5908,4436,4426,4425,5915,5916,4268,5917,5918,4427,5919,5920,5921,5922,5923,6128,6129,6130,6131,6132,6133,4094'
//     },
//     'objectType': 'KalturaMediaAsset'
// };
//
// const result: Validation<Movie> = Movie.decode(movieJson);
//
//
// import { pipe } from 'fp-ts/lib/pipeable';
// import { fold, left } from 'fp-ts/lib/Either';
// import { PathReporter } from 'io-ts/lib/PathReporter';
// // import { Observable, throwError, of } from 'rxjs';
//
// export class DecodeError extends Error {
//     name = 'DecodeError';
// }
//
// export function decode(codec): (json: unknown) => Observable<any> {
//     return (json) => {
//         return pipe(
//             codec.decode(json),
//             fold(
//                 // @ts-ignore
//                 (error) => throwError(new DecodeError(PathReporter.report(left(error)).join('\n'))),
//                 (data) => of(data)
//             )
//         );
//     };
// }
//
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { switchMap } from 'rxjs/operators';
// import { Movie } from './movies';
//
// @Injectable({
//     providedIn: 'root'
// })
// export class MopviesService {
//     constructor(private http: HttpClient) {
//     }
//
//     getAll(): Observable<Movie> {
//         return this.http
//             .get(`/movies`)
//             .pipe(switchMap(decode(Movie)));
//     }
// }
