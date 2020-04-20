import { Injectable } from '@nestjs/common';
import * as low from 'lowdb';
import * as FileSync from 'lowdb/adapters/FileSync';
import { ArtRedisService } from './redis.service';
import * as Redis from 'ioredis';

const adapter = new FileSync('apps/art-api/src/data/dbs/movies.json');

@Injectable()
export class DblService {
    db = low(adapter);
    cacheClient: Redis.Redis;

    constructor(private cache: ArtRedisService) {
        this.initCache();
    }

    async initCache() {
        this.cacheClient = await this.cache.root();
    }

    async getAll(collection) {
        const isExists = await this.cacheClient.exists(collection);

        if (isExists) {
            console.log('Return from cache');
            return await this.cacheClient.get(collection);
        }

        console.log('Return from DB');
        const dbData = this.db.get(collection).value();
        await this.cacheClient.set(collection, JSON.stringify(dbData));
        return dbData;
    }
}
