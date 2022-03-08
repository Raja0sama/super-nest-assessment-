import { HttpModule, HttpService } from '@nestjs/axios';

import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { MoviesResolver } from './movies.resolver';

@Module({
  imports: [HttpModule],
  controllers: [MoviesController],
  providers: [MoviesService, MoviesResolver],
})
export class MoviesModule {}
