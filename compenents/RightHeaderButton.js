import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const RightHeaderButton = ({ onPress, title }) => (
  <TouchableOpacity style={{ marginRight: 10 }} onPress={onPress}>
    <Text style={{ color: 'black', fontSize: 16 }}>{title}</Text>
  </TouchableOpacity>
);

export default RightHeaderButton;