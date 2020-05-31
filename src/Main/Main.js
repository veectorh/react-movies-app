import React, { useState, useEffect } from 'react';

import Search from '../Search/Search';
import Grid from '../Grid/Grid';

import Get from '../Api';
import Constants from '../Constants';
import useSearch from '../CustomHooks/useSearch';

import {
  RootContainer,
  ContentSection,
  MoviesGridSection,
  SearchBarSection
} from './styles';

Constants.FuseOptions.keys = ['title'];

function Main() {
  const [movies, setMovies] = useState({});
  const [movieType, setMovieType] = useState('');

  useEffect(() => {
    try {
      (async () => {
        const popularMovies = await Get.movies('now_playing');
        setMovies(state => {
          const newState = { ...state };
          newState.now_playing = popularMovies.data.results;
          return newState;
        });
        setMovieType('now_playing');
      })();
    } catch (e) {
      console.log({ e });
    }
  }, []);

  const { results, search, searchTerm } = useSearch({
    data: movies[movieType],
    options: Constants.FuseOptions
  });

  return (
    <RootContainer>
    <ContentSection>
      <SearchBarSection>
        <Search handler={e => search(e.target.value)} value={searchTerm} />
      </SearchBarSection>
      <MoviesGridSection>
        <Grid items={results} />
      </MoviesGridSection>
    </ContentSection>
  </RootContainer>
  );
}

export default Main;