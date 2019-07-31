import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { DblService } from './dbl.service';

@Controller('movies')
export class AppController {
    constructor(private readonly appService: AppService,
                private dbService: DblService) {
    }

    @Get()
    getData() {
        return this.dbService.getAll('movies');
    }
}
