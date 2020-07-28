import { Module } from '@nestjs/common';
import { AuthController } from './auth-controller';
import { DblService } from '../dbl.service';
import { ArtRedisService } from '../redis.service';

@Module({
    controllers: [
        AuthController
    ],
    providers: [
        DblService,
        ArtRedisService
    ]
})
export class AuthModule {

}
