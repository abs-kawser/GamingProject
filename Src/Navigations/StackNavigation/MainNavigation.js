import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import RegisterScreen from '../../Screens/RegisterScreen/RegisterScreen';
import GameScreen from '../../Screens/GameScreen/GameScreen';
import NewsScreen from '../../Screens/NewsScreen/NewsScreen';
import RankScreen from '../../Screens/RankScreen/RankScreen';
import ChatScreen from '../../Screens/ChatScreen/ChatScreen';



const Tab = createMaterialBottomTabNavigator();

const MainNavigation = () => {

  return (
    // <Tab.Navigator>
    //   <Tab.Screen name="GameScreen" component={GameScreen} />
    //   <Tab.Screen name="NewsScreen" component={NewsScreen} />
    //   <Tab.Screen name="RankScreen" component={RankScreen} />
    //   <Tab.Screen name="ChatScreen" component={ChatScreen} />
    // </Tab.Navigator> 

    
    <Tab.Navigator
      initialRouteName="Register"
      activeColor="#669bbc"
      inactiveColor="#aaa"
      barStyle={{ backgroundColor: '#000',height: 80 }} // Black background
    >
      <Tab.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          tabBarLabel: 'Register',
          tabBarIcon: ({ color }) => (
            // <Icon name="ellipse-outline" color={color} size={24} />
            <MaterialIcons name="sports-baseball" color={color} size={24} />
          ),
          // tabBarColor: '#1e90ff',
        }}
      />
      <Tab.Screen
        name="GameBoard"
        component={GameScreen}
        options={{
          tabBarLabel: 'Game board',
          tabBarIcon: ({ color }) => (
            <Icon name="calendar-outline" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Rank"
        component={RankScreen}
        options={{
          tabBarLabel: 'Rank',
          tabBarIcon: ({ color }) => (
            <Icon name="bar-chart-outline" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="News"
        component={NewsScreen}
        options={{
          tabBarLabel: 'News',
          tabBarIcon: ({ color }) => (
            <Icon name="newspaper-outline" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default MainNavigation