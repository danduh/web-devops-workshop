import { Module } from '@nestjs/common';
import { RedisModule } from 'nestjs-redis';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DblService } from './dbl.service';
import { ArtRedisService } from './redis.service';
import { AuthModule } from './auth/auth-module';
import { CatalogueModule } from './catalogue/catalogue.module';

@Module({
    imports: [
        AuthModule,
        RedisModule.register({
            name: 'art-cache',
            url: 'redis://127.0.0.1:6379'
        }),
        CatalogueModule
    ],
    controllers: [
        AppController
    ],
    providers: [
        ArtRedisService,
        AppService,
        DblService
    ]
})
export class AppModule {
}
