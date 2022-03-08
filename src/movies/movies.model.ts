import { Field, ObjectType } from '@nestjs/graphql';
@ObjectType()
export class Genre {
  @Field()
  id: number;

  @Field()
  name: string;
}
@ObjectType()
export class ProductionCompany {
  @Field()
  id: number;

  @Field()
  logo_path: string;

  @Field()
  name: string;

  @Field()
  origin_country: string;
}
@ObjectType()
export class ProductionCountry {
  @Field()
  iso_3166_1: string;

  @Field()
  name: string;
}
@ObjectType()
export class Videos {
  @Field((type) => [Result])
  results: Result[];
}
@ObjectType()
export class MoviesDetail {
  @Field()
  adult: boolean;

  @Field()
  backdrop_path: string;

  @Field()
  budget: number;

  @Field((type) => [Genre])
  genres: Genre[];

  @Field()
  homepage: string;

  @Field()
  id: number;

  @Field()
  imdb_id: string;

  @Field()
  original_language: string;

  @Field()
  original_title: string;

  @Field()
  overview: string;

  @Field()
  popularity: number;

  @Field()
  poster_path: string;

  @Field((type) => [ProductionCompany])
  production_companies: ProductionCompany[];

  @Field((type) => [ProductionCountry])
  production_countries: ProductionCountry[];

  @Field()
  release_date: string;

  @Field()
  revenue: number;

  @Field()
  runtime: number;

  @Field((type) => [SpokenLanguage])
  spoken_languages: SpokenLanguage[];

  @Field()
  status: string;

  @Field()
  tagline: string;

  @Field()
  title: string;

  @Field()
  video: boolean;

  @Field()
  vote_average: number;

  @Field()
  vote_count: number;

  @Field((type) => Videos)
  videos: Videos;
}
@ObjectType()
export class SpokenLanguage {
  @Field()
  english_name: string;

  @Field()
  iso_639_1: string;

  @Field()
  name: string;
}
@ObjectType()
export class Result {
  @Field()
  iso_639_1: string;

  @Field()
  iso_3166_1: string;

  @Field()
  name: string;

  @Field()
  key: string;

  @Field()
  site: string;

  @Field()
  size: number;

  @Field()
  type: string;

  @Field()
  official: boolean;

  @Field()
  published_at: Date;

  @Field()
  id: string;
}

@ObjectType()
export class Movies {
  @Field()
  adult: boolean;

  @Field()
  backdrop_path: string;

  @Field((type) => [Number])
  genre_ids: Number[];

  @Field()
  id: number;

  @Field()
  original_language: string;

  @Field()
  original_title: string;

  @Field()
  overview: string;

  @Field()
  popularity: number;

  @Field()
  poster_path: string;

  @Field()
  release_date: string;

  @Field()
  title: string;

  @Field()
  video: boolean;

  @Field()
  vote_average: number;

  @Field()
  vote_count: number;
}
