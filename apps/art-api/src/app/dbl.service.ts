import { Injectable } from '@nestjs/common';
import * as low from 'lowdb';
import * as FileSync from 'lowdb/adapters/FileSync';

//apps/art-api/src
const adapter = new FileSync('apps/art-api/src/data/dbs/movies.json');

@Injectable()
export class DblService {
    db = low(adapter);

    constructor() {
        console.log();
    }

    getAll(collection) {
        return this.db.get(collection).value();
    }
}
