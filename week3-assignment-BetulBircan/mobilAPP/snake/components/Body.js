import React from 'react';
import { View } from 'react-native';

export default ({x, y}) => <View style={{
  position: 'absolute', 
  top: x, 
  left: y, 
  width: 10, 
  height: 10, 
  backgroundColor: 'green'
}}/>