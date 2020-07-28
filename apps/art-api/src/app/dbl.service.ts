import { Injectable } from '@nestjs/common';
import * as low from 'lowdb';
import * as FileSync from 'lowdb/adapters/FileSync';
import { ArtRedisService } from './redis.service';
import * as Redis from 'ioredis';
import { UserCredentials } from '../interfaces/user';

const movies = new FileSync('apps/art-api/src/data/dbs/movies.json');
const users = new FileSync('apps/art-api/src/data/dbs/users.json');

@Injectable()
export class DblService {
    db = {
        users() {
            return low(users).get('users');
        },
        movies() {
            return low(movies).get('movies');
        }
    };

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
        const dbData = this.db.movies().value();
        await this.cacheClient.set(collection, JSON.stringify(dbData));
        return dbData;
    }

    authenticate(credentials: UserCredentials) {
        const user = (this.db.users() as any).find({ userName: credentials.userName }).value();
        if (user)
            return user;
        else
            return { error: 'User Not Found' };
    }
}
