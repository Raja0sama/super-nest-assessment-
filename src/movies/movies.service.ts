import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MoviesService {
  private HOST_URL = 'https://api.themoviedb.org/3/';
  private API_KEY = '';

  constructor(
    private httpsService: HttpService,
    private configService: ConfigService,
  ) {
    this.API_KEY = this.configService.get<string>('API_KEY');
  }

  /**
   * Get the list of all movies
   *
   * @param len : Number of items to be returned from the API.
   * @returns
   */
  async getMovie(len: number) {
    const request = this.httpsService.get(
      `${this.HOST_URL}discover/movie?api_key=${this.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
    );
    let movie_data = await request.toPromise();
    movie_data = movie_data.data.results;

    let response = [];
    for (let i = 0; i < len; i++) {
      response.push(movie_data[i]);
    }

    return response;
  }

  /**
   * Movie details fetch by movie id
   *
   * @param id : Movie ID
   * @returns
   */
  async getMovieByIdWithVideo(id: string) {
    const data = this.httpsService.get(
      `${this.HOST_URL}movie/${id}?api_key=${this.API_KEY}&append_to_response=videos`,
    );
    let movieData = await data.toPromise();
    movieData = movieData.data;
    return movieData;
  }

  /**
   * Search for a movie
   *
   * @param query : Search query
   * @param len : Number of items to be returned from the API.
   * @returns
   */
  async searchMovie(query: string, len: number) {
    const request = this.httpsService.get(
      `${this.HOST_URL}search/movie?api_key=${this.API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`,
    );
    let movie_data = await request.toPromise();
    movie_data = movie_data.data.results;
    let response = [];
    for (let i = 0; i < len; i++) {
      const { original_title, id } = movie_data[i];
      response.push({
        title: original_title,
        id,
      });
    }
    return response;
  }
  /**
   * Search for a movie
   *
   * @param query : Search query
   * @param len : Number of items to be returned from the API.
   * @returns
   */
  async searchMovieGraphQL(query: string, len: number) {
    const request = this.httpsService.get(
      `${this.HOST_URL}search/movie?api_key=${this.API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`,
    );
    let movie_data = await request.toPromise();
    movie_data = movie_data.data.results;
    let response = [];
    for (let i = 0; i < len; i++) {
      response.push(movie_data[i]);
    }
    return response;
  }
}
