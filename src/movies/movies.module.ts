import { HttpModule, HttpService } from '@nestjs/axios';

import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesResolver } from './movies.resolver';
import { MoviesService } from './movies.service';

@Module({
  imports: [HttpModule],
  controllers: [MoviesController],
  providers: [MoviesService, MoviesResolver],
})
export class MoviesModule {}
