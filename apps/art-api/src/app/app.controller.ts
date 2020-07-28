import { Controller, Get, Header } from '@nestjs/common';
import { DblService } from './dbl.service';

@Controller('movies')
export class AppController {
    constructor(private dbService: DblService
    ) {
    }

    @Get()
    @Header('content-type', 'application/json')
    getDataMovies() {
        return this.dbService.getAll('movies');
    }
}
