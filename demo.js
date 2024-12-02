  {/*curds  */}
  <View style={styles.card}>
  <View style={styles.header}>
  <Text style={styles.location}>Yarkon Park, Tel Aviv | Court #2</Text>
  <View style={{ flexDirection: "row", gap: 20 }}>
    {/* Calendar with Date */}
    <View style={styles.rowItem}>
      <MaterialIcons name="calendar-today" size={16} color="#666" style={styles.icon} />
      <Text style={styles.dateTime}>02/24/2023</Text>
    </View>

    {/* Clock with Time */}
    <View style={styles.rowItem}>
      <MaterialIcons name="access-time" size={16} color="#666" style={styles.icon} />
      <Text style={styles.dateTime}>14:00</Text>
    </View>

    {/* Message Icon */}
    <View style={styles.rowItem}>
      <MaterialIcons name="message" size={16} color="#666" style={styles.icon} />
      <Text style={styles.messages}>26 messages</Text>
    </View>
  </View>
    </View>
    
<View style={styles.playersSection}>
  {/* Player 1 */}
  <View style={styles.player}>
    {/* <Image
      style={styles.playerImage}
      source={{ uri: 'https://example.com/player1.png' }} // Replace with player1 image URL
    /> */}
    <Text style={styles.playerName}>Mandler T.</Text>
    <Text style={styles.playerRole}>(PRO)</Text>
  </View>

  {/* VS */}
  <Text style={styles.vs}>VS.</Text>

  {/* Player 2 */}
  <View style={styles.player}>
    {/* <Image
      style={styles.playerImage}
      source={{ uri: 'https://example.com/player2.png' }} // Replace with player2 image URL
    /> */}
    <Text style={styles.playerName}>Oz Y.</Text>
    <Text style={styles.playerRole}>(The Wiz)</Text>
  </View>

  {/* Placeholder players */}
  <View style={styles.placeholder}>
    <Text style={styles.placeholderText}>+ Player</Text>
  </View>
  <View style={styles.placeholder}>
    <Text style={styles.placeholderText}>+ Player</Text>
  </View>
</View>

<View style={styles.footer}>
  <View style={{flex:0.6}}> 
  <Text style={styles.weather}>25% Precipitation</Text>
  <Text style={styles.weather}>Weather - Cloudy</Text>
  </View>
  
<TouchableOpacity style={styles.chatButton}>
  <Text style={styles.chatText}>Chat</Text>
</TouchableOpacity>
</View>


</View>
 
//
const renderCard = ({ item }) => (
  <View style={styles.card}>
    <View style={styles.header}>
      <Text style={styles.location}>{item.location}</Text>
      <View style={{ flexDirection: 'row', gap: 20 }}>
        <View style={styles.rowItem}>
          <MaterialIcons
            name="calendar-today"
            size={16}
            color="#666"
            style={styles.icon}
          />
          <Text style={styles.dateTime}>{item.date}</Text>
        </View>
        <View style={styles.rowItem}>
          <MaterialIcons
            name="access-time"
            size={16}
            color="#666"
            style={styles.icon}
          />
          <Text style={styles.dateTime}>{item.time}</Text>
        </View>
        <View style={styles.rowItem}>
          <MaterialIcons
            name="message"
            size={16}
            color="#666"
            style={styles.icon}
          />
          <Text style={styles.messages}>{item.messages} messages</Text>
        </View>
      </View>
    </View>

    <View style={styles.playersSection}>
      <View style={styles.player}>
        <Text style={styles.playerName}>{item.player1.name}</Text>
        <Text style={styles.playerRole}>({item.player1.role})</Text>
      </View>
      <Text style={styles.vs}>VS.</Text>
      <View style={styles.player}>
        <Text style={styles.playerName}>{item.player2.name}</Text>
        <Text style={styles.playerRole}>({item.player2.role})</Text>
      </View>
      <View style={styles.placeholder}>
        <Text style={styles.placeholderText}> Player</Text>
      </View>
      <View style={styles.placeholder}>
        <Text style={styles.placeholderText}> Player</Text>
      </View>
    </View>

    <View style={styles.footer}>
      <View style={{ flex: 0.6 }}>
        <Text style={styles.weather}>
          {item.precipitation} Precipitation
        </Text>
        <Text style={styles.weather}>Weather - {item.weather}</Text>
      </View>
      <TouchableOpacity style={styles.chatButton}>
        <Text style={styles.chatText}>Chat</Text>
      </TouchableOpacity>
    </View>
  </View>
);

      {/*         
        <FlatList
        data={dummyData}
        renderItem={renderCard}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
      /> */}




//=================///////
#145E94
