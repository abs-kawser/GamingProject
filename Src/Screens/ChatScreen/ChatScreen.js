import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ChatScreen = () => {
  const [messages, setMessages] = useState([
    { 
      id: '1', 
      text: 'Hey guys, thanks a lot for the impressive game, it was fun!', 
      sender: 'Penn N. (panther)', 
      avatar: 'https://i.postimg.cc/9MbMXgXj/Ellipse-16.png' 
    },
    { 
      id: '2', 
      text: 'Certainly, it was fantastic to see how long each point lasted. It’s always fun to play with players.', 
      sender: 'You', 
      avatar: '' 
    },
    { 
      id: '3', 
      text: 'The dedication of the ball was stunning.', 
      sender: 'Penn N. (panther)', 
      avatar: 'https://i.postimg.cc/9MbMXgXj/Ellipse-16.png' 
    },
    { 
      id: '4', 
      text: 'I’m crossing my fingers that the next game will be crazy!', 
      sender: 'Penn N. (panther)', 
      avatar: 'https://i.postimg.cc/9MbMXgXj/Ellipse-16.png' 
    },
  ]);

  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (newMessage.trim() !== '') {
      const newMessageObj = {
        id: (messages.length + 1).toString(),
        text: newMessage,
        sender: 'You',
        avatar: '', // No avatar for the user
      };
      setMessages([...messages, newMessageObj]);
      setNewMessage('');
    }
  };

  // const renderMessage = ({ item }) => {
  //   const isUser = item.sender === 'You';
  //   return (
  //     <View
  //       style={[
  //         styles.messageRow,
  //         isUser ? styles.userRow : styles.otherRow,
  //       ]}
  //     >
  //       {!isUser && (
  //         <Image
  //           source={{ uri: item.avatar }}
  //           style={styles.avatar}
  //         />
  //       )}
  //       <View
  //         style={[
  //           styles.messageContainer,
  //           isUser ? styles.userMessage : styles.otherMessage,
  //         ]}
  //       >
  //         {!isUser && <Text style={styles.senderText}>{item.sender}</Text>}
  //         <Text style={[styles.messageText, isUser && { color: '#fff' }]}>{item.text}</Text>
  //       </View>
  //     </View>
  //   );
  // };

  const renderMessage = ({ item }) => {
    const isUser = item.sender === 'You';
    return (
      <View
        style={[
          styles.messageRow,
          isUser ? styles.userRow : styles.otherRow,
        ]}
      >
        {!isUser && (
          <Image
            source={{ uri: item.avatar }}
            style={styles.avatar}
          />
        )}
        {isUser ? (
          <LinearGradient
            colors={['#34506D', '#3498DB']}
            style={[styles.messageContainer, styles.userMessage]}
          >
            <Text style={[styles.messageText, { color: '#fff' }]}>{item.text}</Text>
          </LinearGradient>
        ) : (
          <View style={[styles.messageContainer, styles.otherMessage]}>
            <Text style={styles.senderText}>{item.sender}</Text>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
       {/* Header Section */}
       <View style={styles.header}>
        <TouchableOpacity style={styles.headerIcon}>
          <AntDesign name="sharealt" size={20}  style={styles.shareIcon} />
        </TouchableOpacity>
        <View style={styles.headerImages}>
          {[...Array(4)].map((_, index) => (
            <Image
              key={index}
              source={{ uri: 'https://i.postimg.cc/9MbMXgXj/Ellipse-16.png' }}
              style={styles.headerAvatar}
            />
          ))}
        </View>
      </View>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.messageList}
      />
      <View style={styles.inputContainer}>
        {/* + Icon */}
        <TouchableOpacity style={styles.plusIconContainer}>
          <Ionicons name="add" size={24} color="#007AFF" />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Add a comment..."
          value={newMessage}
          onChangeText={setNewMessage}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          {/* <Text style={styles.sendText}>Send</Text> */}
          <Ionicons name="send-sharp" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:"flex-start",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
    gap:50
  },
  headerIcon: {
    padding: 10,
    borderRadius: 20,
    // backgroundColor: '#007AFF',
  },
  iconText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  headerImages: {
    flexDirection: 'row',
    gap:20
  },
  headerAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: -10, // Overlap images
  },
  messageList: {
    padding: 10,
  },
  messageRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  userRow: {
    justifyContent: 'flex-end',
  },
  otherRow: {
    justifyContent: 'flex-start',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  messageContainer: {
    borderRadius: 10,
    padding: 10,
    maxWidth: '80%',
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#007AFF',
  },
  otherMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#e6e6e6',
  },
  senderText: {
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 5,
  },
  messageText: {
    color: '#000',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 10,
    backgroundColor: '#f9f9f9',
  },
  sendButton: {
    marginLeft: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#145E94',
    borderRadius: 20,
  },
  sendText: {
    color: '#fff',
    fontWeight: 'bold',
    fontFamily:" "
  },
});

export default ChatScreen;
