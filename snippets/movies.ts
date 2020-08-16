// import * as t from 'io-ts';
//
// const Image = t.type({
//     id: t.number,
//     url: t.string
// });
//
// const Movie = t.type({
//     id: t.number,
//     images: t.array(Image), // <-- Array of Images
//     name: t.string,
//     description: t.string
// });
//
// // TypesScript Type
// type Movie = t.TypeOf<typeof Movie>;
// export { Movie };
//
//
// import { fold, left, right } from 'fp-ts/lib/Either';
// import { pipe } from 'fp-ts/lib/function';
// import { PathReporter } from 'io-ts/lib/PathReporter';
//
//
// const validate = (payload: any) => {
//
//     function onLeft(errors: Array<string>): any {
//         // return `Errors: ${errors.join(', ')}`;
//         return false
//     }
//
//     function onRight(value): any {
//         // return `Ok: ${value}`;
//         return value;
//     }
//
//
//     return pipe(
//         Movie.decode(payload),
//         fold(onLeft, onRight)
//     );
//
// };
//
//
// const TagObject = t.exact(t.type({
//     value: t.string
// }));
// type TagObject = t.TypeOf<typeof TagObject>;
// export { TagObject };
//
//
// const Tag = t.exact(t.type(
//     { objects: t.array(TagObject) }
// ));
//
// type Tag = t.TypeOf<typeof Tag>;
// export { Tag };
//
//
// const Tags = t.exact(
//     t.type({
//             Actors: Tag,
//             Director: Tag
//         }
//     )
// );
//
//
// /***
//  * Images Handling
//  */
//
//
//
//
// const Movies = t.array(Movie);
// type Movies = t.TypeOf<typeof Movies>;
// export { Movies };
//
