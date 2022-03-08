import { ParseIntPipe } from '@nestjs/common';
import { Args, Field, ObjectType, Query, Resolver } from '@nestjs/graphql';

import { Movies, MoviesDetail } from './movies.model';
import { MoviesService } from './movies.service';

@Resolver('Movies')
export class MoviesResolver {
  constructor(private moviesService: MoviesService) {}

  @Query(() => [Movies])
  movies(
    @Args({
      name: 'query',
      nullable: true,
      defaultValue: '',
    })
    query?: string,
    @Args(
      {
        name: 'len',
        nullable: true,
        defaultValue: 10,
      },
      ParseIntPipe,
    )
    length?: number,
  ) {
    if (query) {
      return this.moviesService.searchMovieGraphQL(query, length);
    }
    return this.moviesService.getMovie(length);
  }

  @Query(() => MoviesDetail)
  movieDetail(
    @Args({
      name: 'id',
      nullable: true,
      defaultValue: '',
    })
    id?: string,
  ) {
    return this.moviesService.getMovieByIdWithVideo(id);
  }
}
