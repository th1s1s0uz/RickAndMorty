import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Image, Modal, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { loadFavoritesFromStorage, removeFromFavorites } from '../../redux/favoriteSlice';
import { Colors } from '../assets/color';
import PopupModal2 from '../../Modal/PopupModal2';

const Fav = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);
  const [selectedCharacterId, setSelectedCharacterId] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    dispatch(loadFavoritesFromStorage()); 
  }, []);

  const handleRemoveFromFavorites = (characterId) => {
    setSelectedCharacterId(characterId);
    setModalVisible(true);
  };

  const handleConfirmRemove = () => {
    dispatch(removeFromFavorites(selectedCharacterId));
    setModalVisible(false);
    setSelectedCharacterId(null);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedCharacterId(null);
  };

  const renderCharacterCard = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.characterDetails}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.details}>Status: {item.status}</Text>
          <Text style={styles.details}>Species: {item.species}</Text>
          <Text style={styles.details}>Type: {item.type || 'N/A'}</Text>
          <Text style={styles.details}>Gender: {item.gender}</Text>
          <Text style={styles.details}>Origin: {item.origin.name}</Text>
          <Text style={styles.details}>Location: {item.location.name}</Text>
          <Text style={styles.details}>Created: {item.created}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => handleRemoveFromFavorites(item.id)} style={styles.removeButton}>
        <Text style={styles.removeButtonText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );
  
  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        renderItem={renderCharacterCard}
        keyExtractor={item => item.id.toString()}
      />
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <PopupModal2 onClose={handleCloseModal} onConfirm={handleConfirmRemove} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor: Colors.white,
  },
  card: {
    backgroundColor: Colors.white,
    marginBottom: 10,
    borderRadius: 8,
    padding: 10,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  removeButton: {
    backgroundColor: Colors.pastelgreen,
    padding: 5,
    borderRadius: 5,
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  removeButtonText: {
    color: Colors.white,
    fontWeight: 'bold',
  },
  characterDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  image: {
    width: 125,
    height: 125,
    borderRadius: 100,
    marginBottom: 10,
  },
  textContainer: {
    marginLeft: 10,
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'left',
  },
  details: {
    fontSize: 14,
    marginBottom: 2,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    borderRadius: 20,
    alignItems: 'center',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default Fav;
