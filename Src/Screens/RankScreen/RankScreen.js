// RankScreen.js

import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

// Sample data for leaderboard
const rankData = [
  { id: '1', rank: 1, name: 'John Doe', points: 1200 },
  { id: '2', rank: 2, name: 'Jane Smith', points: 1100 },
  { id: '3', rank: 3, name: 'Bob Brown', points: 1000 },
  { id: '4', rank: 4, name: 'Alice White', points: 950 },
  { id: '5', rank: 5, name: 'Charlie Green', points: 900 },
];

const RankScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Leader board</Text>
      <FlatList
        data={rankData}
        renderItem={({ item }) => (
          <View style={styles.rankItem}>
            <Text style={styles.rankText}>#{item.rank}</Text>
            <Text style={styles.nameText}>{item.name}</Text>
            <Text style={styles.pointsText}>{item.points} points</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  rankItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  rankText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  nameText: {
    fontSize: 16,
    color: '#555',
    marginTop: 5,
  },
  pointsText: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
});

export default RankScreen;
