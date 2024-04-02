import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, loadFavoritesFromStorage, removeFromFavorites } from '../../redux/favoriteSlice';
import { FavoriteLimitModal } from '../../Modal/FavoriteLimitModal';
import { CharacterItem } from '../../compenents/CharacterItem';
import { Colors } from '../assets/color';

const EpisodeDetails = ({ route }) => {
  const { episode } = route.params;
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchCharacters();
  }, []);

  useEffect(() => {
    loadFavoritesFromStorage();
  }, []);

  const fetchCharacters = async () => {
    try {
      const charactersData = await Promise.all(episode.characters.map(async characterUrl => {
        const response = await fetch(characterUrl);
        const characterData = await response.json();
        characterData.image = characterData.image;
        return characterData;
      }));
      setCharacters(charactersData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching characters:', error);
      setLoading(false);
    }
  };

  const handleCharacterPress = (character) => {
    const isFavorite = favorites && Array.isArray(favorites) && favorites.some(favorite => favorite.id === character.id);
    console.log(`Character is favorite: ${isFavorite}`);
    navigation.navigate('Character', { character });
  };

  const handleAddToFavorites = (character) => {
    console.log('Adding character to favorites:', character);
    if (favorites && favorites.length >= 10) {
      setShowModal(true); 
    } else {
      dispatch(addToFavorites(character));
    }
  };

  const handleRemoveFromFavorites = (characterId) => {
    console.log('Removing character from favorites:', characterId);
    dispatch(removeFromFavorites(characterId));
  };

  const renderItem = ({ item }) => (
    <CharacterItem
      character={item}
      handleCharacterPress={handleCharacterPress}
      handleAddToFavorites={handleAddToFavorites}
      handleRemoveFromFavorites={handleRemoveFromFavorites}
      favorites={favorites}
    />
  );

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#03f302"/>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={characters}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.characterList}
      />
      <FavoriteLimitModal showModal={showModal} setShowModal={setShowModal} />
    </View>
  );
  
};
const styles = {
  container: {
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center'
  },
  characterList: {
    width: '100%'
  },
};
export default EpisodeDetails;
