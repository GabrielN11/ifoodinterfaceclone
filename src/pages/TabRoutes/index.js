import React from 'react';
import Login from '../Login'
import Home from '../Home'
import Order from '../Order'
import Search from '../Search'
import User from '../User'
import { Feather } from '@expo/vector-icons';
import { View} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const tabs = [
  {
    name: 'Home',
    icon: 'home',
    component: Home
  },
  {
    name: 'Buscar',
    icon: 'search',
    component: Search
  },
  {
    name: 'Pedidos',
    icon: 'file-text',
    component: Order
  },
  {
    name: 'Perfil',
    icon: 'user',
    component: User
  }
]

const index = () => {
  return (
    <View style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <StatusBar backgroundColor="#fefefe"/>
      <Tab.Navigator>
        {tabs.map(tab => (
          <Tab.Screen key={tab.name} name={tab.name} component={tab.component} options={{
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => (
              <Feather
                name={tab.icon}
                size={size || 12}
                color={focused ? color : '#888'}
              />
            ),
            tabBarActiveTintColor: '#000'
          }} />
        ))}
      </Tab.Navigator>
    </View>
  );
}

export default index