import * as t from 'io-ts';
import { option } from 'fp-ts';

/***
 * TAGS Handler
 */
const TagObject = t.exact(t.type({
    value: t.string
}));
type TagObject = t.TypeOf<typeof TagObject>;
export { TagObject };


const Tag = t.exact(t.type(
    { objects: t.array(TagObject) }
));

type Tag = t.TypeOf<typeof Tag>;
export { Tag };


const Tags = t.exact(
    t.type({
            Actors: Tag,
            Director: Tag
        }
    )
);


/***
 * Images Handling
 */
const Image = t.type({
    id: t.number,
    url: t.string
});


const Movie = t.type({
    id: t.number,
    images: t.array(Image), // <-- Array of Images
    name: t.string,
    tags: Tags,
    description: t.string
});

type Movie = t.TypeOf<typeof Movie>;
export { Movie };


const Movies = t.array(Movie);
type Movies = t.TypeOf<typeof Movies>;
export { Movies };

