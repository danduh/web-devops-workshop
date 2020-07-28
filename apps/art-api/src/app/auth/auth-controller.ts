import { DblService } from '../dbl.service';
import { Body, Controller, Header, Post } from '@nestjs/common';
import { UserCredentials, validateCreds } from '../../interfaces/user';
import { PathReporter } from 'io-ts/lib/PathReporter';
// import { UserCredentials } from '../../interfaces/user';

@Controller('auth')
export class AuthController {
    constructor(private dbService: DblService
    ) {
    }



    @Post('login')
    @Header('content-type', 'application/json')
    login(@Body() creds: UserCredentials) {
        validateCreds(creds)

        // let validatedCreds = UserCredentials.decode(creds)
        // console.log(PathReporter.report(validatedCreds));

        if (creds.userName && creds.password)
            return this.dbService.authenticate(creds);

        return { error: 'some creds missing' };
    }
}
