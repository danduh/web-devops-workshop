import * as t from 'io-ts';
import { pipe } from 'fp-ts/lib/pipeable';
import { fold } from 'fp-ts/lib/Either';

// export interface UserCredentials {
//     userName: string;
//     password: string;
// }


const UserCredentialsDto = t.type({
    userName: t.string,
    password: t.string
});
const UserCredentials = t.exact(UserCredentialsDto);
type UserCredentials = t.TypeOf<typeof UserCredentials>
export { UserCredentials };

const onLeft = (errors: t.Errors) => {
    errors.forEach((e) => {
        console.log(e)
    })
    return false
}

const onRight = (s) => true;

export const validateCreds = (creds) => {
    return  pipe(
        UserCredentials.decode(creds),
        fold(onLeft, onRight)
    )
};
