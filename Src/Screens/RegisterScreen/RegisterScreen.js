// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const Register = () => {
//   return (
//     <View>
//       <Text>Register</Text>
//     </View>
//   )
// }

// export default Register

// const styles = StyleSheet.create({})


import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (!name || !email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
    } else {
      Alert.alert('Success', 'Registration Successful');
    }
  };

  return (
    <View style={styles.container}>
      {/* Animated Logo */}
      <Animatable.Text style={styles.logo} animation="fadeInDown" duration={1500}>
      Register-Now
      </Animatable.Text>

      {/* Animated Input Fields */}
      <Animatable.View animation="fadeInUp" duration={1000} style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
      </Animatable.View>

      <Animatable.View animation="fadeInUp" duration={1200} style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </Animatable.View>

      <Animatable.View animation="fadeInUp" duration={1400} style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </Animatable.View>

      {/* Animated Register Button */}
      <Animatable.View animation="bounceIn" duration={1600}>
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  logo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 40,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default RegisterScreen;
