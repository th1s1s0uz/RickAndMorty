import React from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Text,
  Image,
} from 'react-native';
import { Colors } from '../src/assets/color';

const EpisodeCharacterList = ({ episodes, characters, searchText, handleEpisodePress, handleCharacterPress, handleLoadMore }) => {
  const windowWidth = Dimensions.get('window').width;
  const searchData = [
    ...episodes.map(episode => ({ ...episode, type: 'episode' })),
    ...characters.map(character => ({ ...character, type: 'character' })),
  ];

  const renderItem = ({ item }) => {
    if (item.type === 'episode') {
      return (
        <TouchableOpacity onPress={() => handleEpisodePress(item)}>
          <View style={[styles.card, { width: windowWidth / 2 - 20 }]}>
            <Text style={styles.title}>{item.name}</Text>
            <Text>{item.episode}</Text>
          </View>
        </TouchableOpacity>
      );
    } else if (item.type === 'character') {
      return (
        <TouchableOpacity onPress={() => handleCharacterPress(item)}>
          <View style={[styles.card, { width: windowWidth / 2 - 20 }]}>
            <Image style={styles.characterImage} source={{ uri: item.image }} />
            <Text style={styles.title}>{item.name}</Text>
            <Text>Status: {item.status}</Text>
            <Text>Species: {item.species}</Text>
            <Text>Gender: {item.gender}</Text>
          </View>
        </TouchableOpacity>
      );
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={
          searchText
            ? searchData.filter(item =>
              item.name.toLowerCase().includes(searchText.toLowerCase()),
            )
            : searchData.filter(item => item.type === 'episode')
        }
        renderItem={renderItem}
        keyExtractor={(item, index) => item.id.toString() + index}
        numColumns={2}
        contentContainerStyle={styles.list}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    paddingTop: 10
  },
  list: {
    justifyContent: 'space-between',
  },
  card: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.neongreen,
    padding: 10,
    margin: 5,
    backgroundColor: Colors.palegreen,
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  characterImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 5,
  },
});

export default EpisodeCharacterList;