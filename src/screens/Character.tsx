import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Colors } from '../assets/color';

const Character = ({ route }) => {
  const { character } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <Text style={styles.title}>{character.name}</Text>
      <Text style={styles.detail}>Status: {character.status}</Text>
      <Text style={styles.detail}>Species: {character.species}</Text>
      <Text style={styles.detail}>Type: {character.type || 'N/A'}</Text>
      <Text style={styles.detail}>Gender: {character.gender}</Text>
      <Text style={styles.detail}>Origin: {character.origin.name}</Text>
      <Text style={styles.detail}>Location: {character.location.name}</Text>
      <Text style={styles.detail}>Created: {character.created}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: Colors.white,
    alignItems: 'center',
    paddingTop: 50
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
    paddingVertical: 20
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 10,
  },
  detail: {
    fontSize: 16,
    textAlign: 'left', 
    width: '100%', 
    paddingHorizontal: 10, 
    marginBottom: 5,
    marginLeft: 20
  },
});


export default Character;
