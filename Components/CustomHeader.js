import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CustomHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={{ uri:'https://i.postimg.cc/05690Vdt/headerimage1.jpg' }}
        style={styles.avatar}
        resizeMode="cover"  // Adjust the image scaling to focus on the center part
      />
      <View style={styles.textContainer}>
        <Text style={styles.name}>Noam Penn (Panther)</Text>
        <Text style={styles.subtitle}>a tennis player</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#1C1C1C', // Background color (dark theme)
  },
  avatar: {
    width: 50, // Width for showing the face
    height: 50, // Height for showing the face
    borderRadius: 25, // Makes it circular
    borderWidth: 2,
    borderColor: '#FFFFFF', // White border around the avatar
  },
  textContainer: {
    marginLeft: 12, // Spacing between avatar and text
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF', // White text color
  },
  subtitle: {
    fontSize: 14,
    color: '#B0B0B0', // Gray text color for subtitle
  },
});

export default CustomHeader;
