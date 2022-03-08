# SuperMovies Backend.

The overall backend is build with nestJs and have both type of request working, Rest API and GraphQL

Sample Rest Api EndPoints to use :

`https://super-nset.herokuapp.com/movies/`
`https://super-nset.herokuapp.com/movies/:id`
`https://super-nset.herokuapp.com/movies/search?search=Superman`

Sample GraphQL query

To Fetch movieDetail

```{
    movieDetail(id : "414906"){
        title
        original_title
        videos{
        results {
        name
        key
        }
    }
 }
}
```

To Discover Movies

```

{
movies{
title
id
}
}

```

To Search Movies

```{ movies(query :"superman"){
    title
    id
  }}
```

## For MySelf

learning nest js

- Controller handles the request
- Providers are injectable to the controlled, becoming more of a helper functions, to separate main login, from routes control
- Unlike Rest, GraphQL require resolvers.
