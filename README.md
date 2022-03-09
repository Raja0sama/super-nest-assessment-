## Code Assessment

Link to Deployed Version of the App:

The Basic Host is
`https://super-nset.herokuapp.com/`

GraphQL
`https://super-nset.herokuapp.com/movies/`

Rest Routes
`https://super-nset.herokuapp.com/movies/`
`https://super-nset.herokuapp.com/movies/:id`
`https://super-nset.herokuapp.com/movies/search?search=Superman`

The Backend is developed with Nest Js, which in my opinion is angular for backend. The Requirement was to have three kind of routes
1 - Discover first 10 movies by popularity
2 - Search by movies title
3 - Movie Detail with Videos attached

For the Rest api, you can take a look at `movies.controller.ts` where there are three types of GET routes are defined.

For the graphQL, You can see the model or the schema is defined on `movies.model.ts` that is being used in the `movies.resolver.js` which is technically the controller for GraphQL controlling type of queries we can have and you can observe there are two types of Queries defined.

The Requirement was to either use graphQL or Rest Api, I had plenty time so i decided to write for both since it was fun learning about nest js, which at first is pretty overwhelming.

`Movies.service.ts` is injectable, injected in both resolver and controller, making its function for both. The file itself contain the main business logic.

HTTPS Service library that is being used is Axios, as you cna see in app.module.ts.

Beside that i think the code is self explanatory.

Below are GraphQL queries

```
const DISCOVER_MOVIES = gql`
  {
    movies {
      title
      id
      original_title
      backdrop_path
      vote_average
      release_date
    }
  }
`;

const SEARCH_MOVIES = gql`
  query search($query: String) {
    movies(query: $query) {
      title
      id
    }
  }
`;

const MOVIE_DETAIL = gql`
  query movieDetail($id: String) {
    movieDetail(id: $id) {
      title
      genres {
        id
        name
      }
      overview
      original_title
      poster_path
      production_companies {
        name
      }
      status
      tagline
      videos {
        results {
          name
          key
        }
      }
    }
  }
`;
```

The Link to Frontend Repo is Here
https://github.com/Raja0sama/super-react-assessment

Thank You.
Raja Osama
(https://rajaosama.me/)
