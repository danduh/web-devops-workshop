import { RedisService } from 'nestjs-redis';
import { Injectable } from '@nestjs/common';
import * as Redis from 'ioredis';

@Injectable()
export class ArtRedisService {
    constructor(
        private readonly redisService: RedisService
    ) {
    }

    async root(): Promise<Redis.Redis> {
        const client = await this.redisService.getClient('art-cache');
        return client;
    }
}
