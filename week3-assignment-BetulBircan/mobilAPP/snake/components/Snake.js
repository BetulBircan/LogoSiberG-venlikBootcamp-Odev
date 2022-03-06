import React from 'react';
import { View, Text } from 'react-native';

import Body from './Body.js';

export default ({x, y, direction, body}) => <View>
{body.map((part) => <Body x={part.x} y={part.y}/>)}
</View>