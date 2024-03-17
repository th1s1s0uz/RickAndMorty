// Home.js
import React, { useEffect, useState } from 'react';
import SearchInput from '../../compenents/SearchInput';
import EpisodeCharacterList from '../../api/EpisodeCharacterList';


const Home = ({ navigation }) => {
  const [episodes, setEpisodes] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetchEpisodes();
    fetchCharacters();
  }, []);

  const fetchEpisodes = async () => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/episode?page=${page}`,
      );
      const data = await response.json();
      setEpisodes(data.results);
    } catch (error) {
      console.error('Error fetching episodes:', error);
    }
  };

  const fetchCharacters = async () => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`,
      );
      const data = await response.json();
      setCharacters(data.results);
    } catch (error) {
      console.error('Error fetching characters:', error);
    }
  };

  const handleEpisodePress = episode => {
    navigation.navigate('EpisodeDetails', { episode });
  };

  const handleCharacterPress = character => {
    navigation.navigate('Character', { character });
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <>
      <SearchInput searchText={searchText} setSearchText={setSearchText} />
      <EpisodeCharacterList
        episodes={episodes}
        characters={characters}
        searchText={searchText}
        handleEpisodePress={handleEpisodePress}
        handleCharacterPress={handleCharacterPress}
        handleLoadMore={handleLoadMore}
      />
    </>
  );
};

export default Home;
