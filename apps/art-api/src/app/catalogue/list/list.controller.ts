import { Controller, Get, Header } from '@nestjs/common';
import { CatalogueService } from '../catalogue.service';

@Controller('movies')
export class ListController {
    constructor(private catService: CatalogueService) {

    }

    @Get()
    @Header('content-type', 'application/json')
    getList() {
        return this.catService.getList('movies');
    }
}
