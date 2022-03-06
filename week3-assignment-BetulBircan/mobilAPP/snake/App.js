import * as React from 'react';
// import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';
import LoginScreen from './screens/login-screen'
import MainScreen from './screens/main-screen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator()

function HomeScreen() {
  return (
    <View style={styles.container}>
    <LoginScreen></LoginScreen>
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>

   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5dc',
    flexDirection:'column',
    // justifyContent:'center',
    // alignItems:'center',
    // paddingTop:50
  },
  // oval: {
  //   borderWidth:1.5,
  //   borderColor:'#e9967a',
  //   backgroundColor:'white',
  //   borderTopRightRadius:0,
  //   borderTopLeftRadius:0,
  //   borderBottomLeftRadius:150,
  //   borderBottomRightRadius:150,
  //   width:"100%",
  //   height:200,
  // },
});
