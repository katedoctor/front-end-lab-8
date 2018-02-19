function collectIds(movies){
  let listFilms = getFilteredArray(movies, function(el){
    return el.rating > 3.0;
  });
  let listFilmIds = getTransformedArray (listFilms, function(el){
    return el.id;
  });
  return listFilmIds;
}