import { StyleSheet, Text, View, Image, ImageBackground,FlatList } from 'react-native';
import React from 'react'
import CustomHeader from '../../../Components/CustomHeader'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Or any other icon set
import Icons from 'react-native-vector-icons/Ionicons';
const NewsScreen = () => {
 
  const dummyData = [
    {
      id: 1,
      category: 'News',
      title: 'Lorem Ipsum is a term for a completely meaningless text - sometimes read',
      time: 'an hour ago',
      comments: 26,
      imageUrl: 'https://i.postimg.cc/HkxHw7MG/ball-photo.png',
    },
    {
      id: 2,
      category: 'Technology',
      title: 'Exploring the latest trends in AI and machine learning',
      time: '2 hours ago',
      comments: 14,
      imageUrl: 'https://i.postimg.cc/HkxHw7MG/ball-photo.png',
    },
    {
      id: 3,
      category: 'Sports',
      title: 'Top 10 moments in the recent football tournament',
      time: '3 hours ago',
      comments: 32,
      imageUrl: 'https://i.postimg.cc/HkxHw7MG/ball-photo.png',
    },
    {
      id: 4,
      category: 'Health',
      title: 'Tips for maintaining a balanced diet and staying fit',
      time: '4 hours ago',
      comments: 20,
      imageUrl: 'https://i.postimg.cc/HkxHw7MG/ball-photo.png',
    },
    {
      id: 5,
      category: 'Entertainment',
      title: 'Upcoming movies to watch out for this summer',
      time: '5 hours ago',
      comments: 15,
      imageUrl: 'https://i.postimg.cc/HkxHw7MG/ball-photo.png',
    },
  ];



  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.category}>{item.category}</Text>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <Icons name="time-outline" size={14} color="#145E94" />
            <Text style={styles.infoText}>{item.time}</Text>
          </View>
          <View style={styles.infoItem}>
            <Icons name="chatbubble-outline" size={14} color="#145E94" />
            <Text style={styles.infoText}>{item.comments} comments</Text>
          </View>
        </View>
      </View>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
    </View>
  );







  return (
    <View style={styles.Container}>
      <CustomHeader />

      {/*image part*/}
      <View>
        {/* Image Background with Text Overlay */}
        <ImageBackground
          source={{ uri: 'https://i.postimg.cc/3w8ZYWFd/Rectangle-554.png' }} // Using the provided image URL
          style={styles.imageBackground}
          imageStyle={{ borderRadius: 10 }} // Rounded corners
        >
          {/* Logo */}
          <View style={styles.logoContainer}>
            <Image
              source={{ uri: 'https://your-logo-url.com/logo.png' }} // Replace with your logo URL
              style={styles.logo}
            />
          </View>

          {/* Text Container */}
          <View style={styles.textContainerI}>
            <Text style={styles.titlel}>
              Lorem Ipsum is a nickname for such a completely meaningless text - some
            </Text>
            {/* <View style={{flexDirection:"row",}}>
            <Text style={styles.subtitle}>Lorem Ipsum is - 4 minutes of reading</Text>
            <Icon name="clock-outline" size={20} color="white" style={styles.icon} />
             </View> */}
            <Text style={styles.subtitlex}>
              Lorem Ipsum is - 4 minutes of reading{' '}
              <Icon name="clock-outline" size={16} color="white" style={styles.clockIcon}/>
            </Text>
          </View>
        </ImageBackground>
      </View>

      {/* curd part */}
      {/* <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.category}>News</Text>
        <Text style={styles.title}>
          Lorem Ipsum is a term for a completely meaningless text - sometimes read
        </Text>
        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <Icons name="time-outline" size={14} color="#145E94" />
            <Text style={styles.infoText}>an hour ago</Text>
          </View>
          <View style={styles.infoItem}>
            <Icons name="chatbubble-outline" size={14} color="#145E94" />
            <Text style={styles.infoText}>26 comments</Text>
          </View>
        </View>
      </View>
      <Image
        source={{
          uri: 'https://i.postimg.cc/HkxHw7MG/ball-photo.png',
        }}
        style={styles.image}
      />
       </View> */}
 
      
       {/* */}
      <FlatList
      data={dummyData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.container}
    />
  

    </View>
  )
}

export default NewsScreen

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
    
  },
  imageBackground: {
    height: 200,
    justifyContent: 'flex-end',
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 10
  },


  // logoContainer: {
  //   position: 'absolute',
  //   top: 10,
  //   left: 10,
  // },
  // logo: {
  //   width: 50,
  //   height: 50,
  //   resizeMode: 'contain',
  // },
  textContainerI: {
    // backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dark background with transparency
    padding: 10,
    borderRadius: 5,
  },
  titlel: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitleContainer: {
    flexDirection: "row",
    alignItems: 'center', // Ensures the text and icon are vertically aligned
  },
  subtitlex: {
    color: 'white',
    fontSize: 12,
    marginTop: 5,
    fontFamily: ' '
  },

  card: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginVertical: 8,
    marginHorizontal: 12,
  },
  textContainer: {
    flex: 1,
    paddingRight: 10,
  },
  category: {
    color: '#007BFF',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    fontFamily:" "
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  infoText: {
    marginLeft: 4,
    color: 'gray',
    fontSize: 12,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 8,
  },
});
