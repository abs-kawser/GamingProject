import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StackNavigator from './Src/Navigations/StackNavigation/StackNavigator'
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (

    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})