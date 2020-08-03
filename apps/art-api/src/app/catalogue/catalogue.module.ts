import { Module } from '@nestjs/common';
import { ListController } from './list/list.controller';
import { CatalogueService } from './catalogue.service';
import { DblService } from '../dbl.service';
import { ArtRedisService } from '../redis.service';

@Module({
    controllers: [
        ListController
    ],
    providers:[
        CatalogueService,
        DblService,
        ArtRedisService
    ]
})
export class CatalogueModule {

}
