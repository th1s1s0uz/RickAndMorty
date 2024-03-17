import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Colors } from '../assets/color';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home'); 
    }, 2000); 

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/rick-and-morty-31043.png')} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  image: {
    width: '80%', 
    resizeMode: 'contain',
    height: 400,

  },
});

export default SplashScreen;
