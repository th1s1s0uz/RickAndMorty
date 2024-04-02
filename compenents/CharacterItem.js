import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import { Colors } from '../src/assets/color';

export const CharacterItem = ({ character, handleCharacterPress, handleAddToFavorites, handleRemoveFromFavorites, favorites }) => (
  <View style={{ justifyContent:'center', width: '50%'}}>
  <TouchableOpacity onPress={() => handleCharacterPress(character)}>
    <View style={styles.characterContainer}>
      <Image source={{ uri: character.image }} style={styles.characterImage} />
      <Text style={styles.name}>{character.name}</Text>
      <Text style={styles.details}>Status: {character.status}</Text>
      <Text style={styles.details}>Species: {character.species}</Text>
      <Text style={styles.details}>Type: {character.type || 'N/A'}</Text>
      <View style={styles.favButtonContainer}>
      {favorites && Array.isArray(favorites) && favorites.find(favorite => favorite.id === character.id) ? (
          <TouchableOpacity onPress={() => handleRemoveFromFavorites(character.id)} style={styles.favButton}>
            <Text style={styles.favText}>Remove Fav</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => handleAddToFavorites(character)} style={styles.favButton}>
            <Text style={styles.favText}>Add Fav</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  </TouchableOpacity>
  </View>
);

const styles = {
  characterContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    margin: 10,
    alignItems: 'center',
    width: '90%',
    height: 310,
    backgroundColor: Colors.palegreen
    
  },
  characterImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 5,
  },
  name:{
    textAlign: 'left',
    width: '100%',
    fontWeight: 'bold',
    fontSize: 18,
    paddingVertical: 5,
    color: Colors.black
  },
  details:{
    textAlign: 'left',
    width: '100%',
    color: Colors.black
  },
  favButtonContainer: {
    flexDirection: 'row', 
    marginTop: 'auto',
    justifyContent: 'center',
    alignItems: 'center'
  },
  favButton: {
    marginTop: 10,
    backgroundColor: Colors.pastelgreen,
    padding: 10,
    borderRadius: 5,
  },
  favText: {
    fontWeight: 'bold',
    color: Colors.white,
  },
};
