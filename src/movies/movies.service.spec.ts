import { ConfigModule, ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';

import { AppModule } from '../app.module';
import { HttpModule } from '@nestjs/axios';
import { MoviesModule } from './movies.module';
import { MoviesService } from './movies.service';

describe('Movies Module', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
      imports: [
        HttpModule,
        ConfigModule.forRoot({
          isGlobal: true,
        }),
      ],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  it('It should return movies Array', async () => {
    let lenth = 1;
    const result = await service.getMovie(lenth);
    expect(result).toHaveLength(lenth);
  });
  it('Search items title should contain the search key', async () => {
    const key = 'super';
    const result = await service.searchMovie(key, 1);
    expect(`${result[0].title}`.toLowerCase().indexOf(key)).toBeGreaterThan(-1);
  });
  it('Search items title should contain the search key', async () => {
    const key = 634649;
    const result: any = await service.getMovieByIdWithVideo(`${key}`);
    expect(result.id).toBe(key);
  });
});
