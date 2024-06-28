import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Favorite() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/discover/movie?api_key=9ea3a0a5eda788de1a8738152ff4d406'
      )
      .then((res) => res.json())
      .then((json) => setMovieList(json.results));
  }, []);
  return <>
  <div>fav</div>
  </>;
}     
