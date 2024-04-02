import React from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import { Colors } from '../src/assets/color';

export const FavoriteLimitModal = ({ showModal, setShowModal }) => (
  <Modal
    animationType="slide"
    transparent={true}
    visible={showModal}
    onRequestClose={() => setShowModal(false)}
  >
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <Text style={styles.modalText}>You cannot add more than 10 favorite characters. You can try deleting a character from favorites.</Text>
        <TouchableOpacity onPress={() => setShowModal(false)} style={styles.closeButton}>
          <Text style={styles.buttonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
);

const styles = {
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: Colors.white,
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  modalText: {
    marginBottom: 10,
    fontSize: 16,
    textAlign: 'center',
    color: Colors.black
  },
  closeButton: {
    backgroundColor: Colors.blue, // Customize as needed
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: Colors.pastelgreen,
    fontSize: 16,
  }
};
