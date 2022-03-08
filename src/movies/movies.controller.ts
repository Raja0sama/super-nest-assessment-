import { Controller, Get, Param, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private movieService: MoviesService) {}

  @Get()
  getMovies(@Query() query: any) {
    return this.movieService.getMovie(query?.len || 10);
  }

  @Get('/search')
  searchMovie(@Query() query: any) {
    return this.movieService.searchMovie(query.search, query?.len || 10);
  }

  @Get('/:id')
  getMovieById(@Param() params: any) {
    return this.movieService.getMovieByIdWithVideo(params.id);
  }
}
