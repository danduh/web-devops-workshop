import { Injectable } from '@nestjs/common';
import { DblService } from '../dbl.service';

@Injectable()
export class CatalogueService {
    constructor(private dbl: DblService) {
    }

    getList(collection) {
        return this.dbl.getAll(collection);
    }
}
