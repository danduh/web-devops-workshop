import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DblService } from './dbl.service';

@Module({
    imports: [],
    controllers: [
        AppController
    ],
    providers: [
        AppService,
        DblService
    ]
})
export class AppModule {
}
