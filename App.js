import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TentangAplikasiScreen from './screens/TentangAplikasiScreen';
import HomeScreen from './screens/HomeScreen';
import BengkelMobil from './screens/BengkelMobil';
import BengkelMotor from './screens/BengkelMotor';
import CalculateScreen from './screens/CalculateScreen';
import Thanks from './screens/Thanks';
import LoginScreen from './screens/LoginScreen';


import { createStackNavigator, createAppContainer } from 'react-navigation';


const navigator = createStackNavigator({
  TentangAplikasi: TentangAplikasiScreen,
  Mobil: BengkelMobil,
  Home: HomeScreen,
  Motor: BengkelMotor,
  Calculate: CalculateScreen,
  trims: Thanks,
  Login: LoginScreen,
},{
  initialRouteName: 'Login',
  defaultNavigationOptions: {
    headerTitle: 'Bengkel Online'
  }
});

export default createAppContainer(navigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
