import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../src/assets/color';

const CustomAppBar = ({ title, showBackButton, showFavButton }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {showBackButton && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
      )}
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      {showFavButton && (
        <TouchableOpacity onPress={() => navigation.navigate('Fav')}>
          <Text style={styles.favText}>Fav</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: Colors.white,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  titleText: {
    color: Colors.pastelgreen,
    fontSize: 18,
    fontWeight: 'bold',
  },
  favText: {
    color: Colors.pastelgreen,
    fontSize: 16,
    fontWeight: '500'
  },
  backText: {
    color: Colors.pastelgreen,
    fontSize: 16,
    fontWeight: '500'
  },
});

export default CustomAppBar;
