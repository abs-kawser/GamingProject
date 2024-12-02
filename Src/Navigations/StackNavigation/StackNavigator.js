import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainNavigation from './MainNavigation';
import ChatScreen from '../../Screens/ChatScreen/ChatScreen';

const StackNavigator = () => {

  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>

      <Stack.Screen
        name="Main Navigation"
        component={MainNavigation}
        options={{ headerShown: false }}
      />


      <Stack.Screen
        name="Chat Screen"
        component={ChatScreen}
        options={{
          headerShown: true,
          headerTitle: "Monday, February 23 | 14:00 - Tel Aviv",
          headerTitleStyle: {
            fontSize: 15,
            fontWeight: 'bold',
            color: '#145E94', // Example color
            textAlign: 'center', // Centers text (not always effective in Stack.Navigator)
          },
          headerStyle: {
            backgroundColor: '#f8f9fa',
          },
          // headerLeft: () => <View style={{ width: 0 }} />,
        }}
      />

    </Stack.Navigator>


  )
}

export default StackNavigator

const styles = StyleSheet.create({})