import { View, TextInput, StyleSheet, TouchableOpacity, Text, ScrollView, FlatList, Image,SafeAreaView } from 'react-native';
import React, { useState } from 'react'
import CustomHeader from '../../../Components/CustomHeader'
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'
import Iconz from 'react-native-vector-icons/FontAwesome6';            
            


const GameScreen = () => {
  
  const dummyData = [
    {
      id: '1',
      location: 'Yarkon Park, Tel Aviv | Court #2',
      dateTime: '02/24/2023 14:00',
      messages: '26 messages',
      weather: {
        description: 'Cloudy',
        precipitation: '25%',
      },
      player1Image: 'https://i.postimg.cc/9MbMXgXj/Ellipse-16.png', // Player 1 Image
      player2Image: 'https://i.postimg.cc/HL58mt7p/Ellipse-15-1.png', // Player 2 Image
    },
    {
      id: '2',
      location: 'Central Park, NYC | Court #5',
      dateTime: '03/10/2023 16:00',
      messages: '10 messages',
      weather: {
        description: 'Sunny',
        precipitation: '5%',
      },
      player1Image: 'https://i.postimg.cc/9MbMXgXj/Ellipse-16.png', // Player 1 Image
      player2Image: 'https://i.postimg.cc/HL58mt7p/Ellipse-15-1.png', // Player 2 Image
    },
    {
      id: '3',
      location: 'Hyde Park, London | Court #1',
      dateTime: '04/15/2023 18:00',
      messages: '32 messages',
      weather: {
        description: 'Rainy',
        precipitation: '80%',
      },
      player1Image: 'https://i.postimg.cc/9MbMXgXj/Ellipse-16.png', // Player 1 Image
      player2Image: 'https://i.postimg.cc/HL58mt7p/Ellipse-15-1.png', // Player 2 Image
    },
  ];
  
  const navigation = useNavigation(); // Access the navigation object
 
  const renderCard = ({ item }) => (
    
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.locationContainer}>
          <Text style={[styles.location, { marginLeft: 10 }]}>{item.location}</Text>
          <AntDesign name="sharealt" size={20} color="#145E94" style={styles.shareIcon} />
        </View>
  
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <View style={styles.rowItem}>
            <MaterialIcons name="calendar-today" size={16} color="#145E94" style={styles.icon} />
            <Text style={styles.dateTime}>{item.dateTime.split(' ')[0]}</Text>
          </View>
          <View style={styles.rowItem}>
            <MaterialIcons name="access-time" size={16} color="#145E94" style={styles.icon} />
            <Text style={styles.dateTime}>{item.dateTime.split(' ')[1]}</Text>
          </View>
          <View style={styles.rowItem}>
            <MaterialIcons name="message" size={16} color="#145E94" style={styles.icon} />
            <Text style={styles.messages}>{item.messages}</Text>
          </View>
        </View>
      </View>
  
      <View style={styles.playersSection}>
        {/* Player 1 */}
        <View style={styles.player}>
          <Image style={styles.playerImage} source={{ uri: item.player1Image }} />
          <Text style={styles.playerName}>Player 1</Text>
          <Text style={styles.playerRole}>({item.player1Role || 'Role'})</Text> {/* Optional player role */}
        </View>
  
       
  
        {/* Player 2 */}
        <View style={styles.player}>
          <Image style={styles.playerImage} source={{ uri: item.player2Image }} />
          <Text style={styles.playerName}>Player 2</Text>
          <Text style={styles.playerRole}>({item.player2Role || 'Role'})</Text> {/* Optional player role */}
        </View>
  
        <Text style={styles.vs}>VS.</Text>
        {/* Placeholders */}
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>+</Text>
        </View>
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>+</Text>
        </View>
      </View>
  
      <View style={styles.footer}>
        <View style={{ flex: 0.6 }}>
          <View style={{ flexDirection: "row", gap: 20 }}>
            <Ionicons name="water-outline" size={20} color="#145E94" />
            <Text style={styles.weather}>Weather - {item.weather.description}</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 20 }}>
            <AntDesign name="cloudo" size={20} color="#145E94" />
            <Text style={styles.weather}>{item.weather.precipitation} Precipitation</Text>
          </View>
        </View>
  
        <View style={{ flex: 0.4 }}>
          <LinearGradient
            colors={['#34506D', '#3498DB']}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={styles.gradientButton}
          >
            <TouchableOpacity
              style={styles.chatButton}
              onPress={() => navigation.navigate('Chat Screen')} // Navigate to the ChatScreen
            >
              <Text style={styles.chatText}>Chat</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
  

  return (

    <View style={styles.Container}>
      <CustomHeader />
     <ScrollView > 
      <View style={styles.containerx}>
        {/* Filter Icon */}
        <TouchableOpacity style={styles.iconButton}>
            {/* <Icon name="filter-outline" size={20} color="#1E88E5" /> */}
            <Iconz name="bars-staggered" size={20} color="#1E88E5" />
        </TouchableOpacity>


        <View style={{
          flexDirection: "row",
          borderWidth: 1,
          borderRadius: 20,
          borderColor: "#145E94", // Add border color
          paddingHorizontal: 10, // Add padding for internal spacing
          alignItems: "center", // Center items vertically
          gap: 40,
        }}>
          <TextInput
            style={styles.input}
            placeholder="Date | hour..."
            placeholderTextColor="black"
          />
          <TouchableOpacity style={{ alignSelf: "center" }}>
            <Icon name="chevron-down-outline" size={20} color="#145E94" />
          </TouchableOpacity>
        </View>


        </View>
        <View style={{
        width: "40%",
        borderWidth: 1,
        borderRadius: 20,
        marginVertical: 10,
        marginHorizontal: 20,
        padding: 10,
        justifyContent: "center", 
        alignItems: "center",
        borderColor:"#145E94"

      }}>
        <Text style={{color:"#145E94"}}>Doubles games</Text>
        </View>

        
        {/*===================curds=======================================  */}
        <View style={styles.card}>
<View style={styles.header}> 

  <View style={styles.locationContainer}> 
    <Text style={[styles.location, { marginLeft:10 }]}>Yarkon Park, Tel Aviv | Court #2  </Text> 
    <AntDesign name="sharealt" size={20} color="#145E94" style={styles.shareIcon} />
  </View>
 
  
<View style={{ flexDirection: "row",justifyContent:"space-around"}}>
{/* Calendar with Date */}
<View style={styles.rowItem}>
<MaterialIcons name="calendar-today" size={16} color="#145E94" style={styles.icon} />
<Text style={styles.dateTime}>02/24/2023</Text>
</View>

{/* Clock with Time */}
<View style={styles.rowItem}>
<MaterialIcons name="access-time" size={16} color="#145E94" style={styles.icon} />
<Text style={styles.dateTime}>14:00</Text>
</View>

{/* Message Icon */}
<View style={styles.rowItem}>
<MaterialIcons name="message" size={16} color="#145E94" style={styles.icon} />
<Text style={styles.messages}>26 messages</Text>
</View>
</View>
</View>

<View style={styles.playersSection}>
{/* Player 1 */}
<View style={styles.player}>
<Image
style={styles.playerImage}
source={{ uri: 'https://i.postimg.cc/9MbMXgXj/Ellipse-16.png' }} // Replace with player1 image URL
/>
<Text style={styles.playerName}>Mandler T.</Text>
<Text style={styles.playerRole}>(PRO)</Text>
</View>

{/* VS */}

{/* Player 2 */}
<View style={styles.player}>
<Image
style={styles.playerImage}
source={{ uri: 'https://i.postimg.cc/HL58mt7p/Ellipse-15-1.png' }} // Replace with player2 image URL
/>
<Text style={styles.playerName}>Oz Y.</Text>
<Text style={styles.playerRole}>(The Wiz)</Text>
</View>
<Text style={styles.vs}>VS.</Text>
  {/* Placeholder players */}

<View style={styles.placeholder}>
<Text style={styles.placeholderText}>+</Text>
</View>
<View style={styles.placeholder}>
<Text style={styles.placeholderText}>+</Text>
</View>
</View>

<View style={styles.footer}>  
  <View style={{ flex: 0.6, }}>
  <View style={{ flexDirection: "row", gap:20}}>
      <Ionicons name="water-outline" size={20} color="#145E94" />
      <Text style={styles.weather}>Weather - Cloudy</Text>
    </View>
    
    <View style={{ flexDirection: "row", gap:20}}>
  <AntDesign name="cloudo" size={20} color="#145E94" />
  <Text style={styles.weather}>25% Precipitation</Text>
    </View>
 </View>


  <View style={{ flex:0.4,}}>       
  <LinearGradient
colors={['#34506D', '#3498DB']}
start={{ x: 0, y: 0.5 }}
end={{ x: 1, y: 0.5 }}
style={styles.gradientButton}
>
<TouchableOpacity
    style={styles.chatButton}
    onPress={() => navigation.navigate('Chat Screen')} // Navigate to the ChatScreen
  >
    <Text style={styles.chatText}>Chat</Text>
  </TouchableOpacity>
  </LinearGradient>
  </View>

</View>
        </View> 

        {/* FlatList for rendering cards */}
        <FlatList
            data={dummyData}
            renderItem={renderCard}
            keyExtractor={(item) => item.id}
          />

    </ScrollView>     
    </View>
  )
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor:"white"
  },
  
  containerx: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
    gap: 20

  },
  iconButton: {
    marginRight: 10,
  },
  input: {
    // flex: 1,
    fontSize: 14,
    color: '#000',
  },
  locationContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    paddingHorizontal: 10, 
    marginBottom: 10,
    overflow: 'hidden', 
    flexWrap: 'nowrap',
  },

  // curds 
  card: {
    // flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    margin: 10,
    padding: 10,
    
    
  },
  header: {
    marginTop: 10,
    justifyContent: 'space-between',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
    
  },
  location: {
    fontWeight: 'bold',
    fontSize: 16,
     marginBottom: 5,
     color: '#007AFF'
  },
  dateTime: {
    color: '#888',
    fontSize: 14,
  },
  messages: {
    // color: '#007AFF',
    color: '#808080',
    fontSize: 14,
  },
  playersSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  player: {
    alignItems: 'center',
    // marginHorizontal: 10,
  },
  playerImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 5,
  },
  playerName: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  playerRole: {
    color: '#666',
    fontSize: 12,
  },
  vs: {
    fontWeight: 'bold',
    fontSize: 16,
    marginHorizontal: 10,
  },
  placeholder: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    width: 70, 
    height: 70,
    borderRadius: 40,
  },
  placeholderText: {
    fontSize: 25,
    color: '#aaa',
  },
  
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginLeft: 10,
    
  },
  weather: {
    color: '#666',
    fontSize: 14,
    fontFamily:"  "
  },
  rowItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 5,
  },
  dateTime: {
    color: '#666',
    fontSize: 14,
  },
// 
  gradientButton: {
    borderRadius: 10,
    padding: 5
    // flex: 0.4,
    // backgroundColor:"red"
    
  },
  chatButton: {
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    
   
  },
  chatText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Helvetica'
  },
  

})

export default GameScreen
















    // <View style={styles.header}>
      //   <Text style={styles.location}>Yarkon Park, Tel Aviv | Court #2</Text>
 
      //     <View style={{flexDirection:"row",gap:20}}> 
      //       <Text style={styles.dateTime}>02/24/2023 | 14:00</Text>
      //       <Text style={styles.messages}>26 messages</Text>
      //     </View>
         
      // </View>