import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

import Home from './src/pages/Home';
import Locals from './src/pages/Locals';
import Vaccines from './src/pages/Vaccines';
import News from './src/pages/News';

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    name: 'home',
  },
  Vaccines: {
    name: 'syringe',
  },
  Locals: {
    name: 'map-marker-alt',
  },
  News: {
    name: 'newspaper',
  },
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const { name } = icons[route.name];
            return <FontAwesome5 name={name} size={size} color={color} />;
          },
          tabBarStyle: {
            height: 70,
            paddingTop: 10,
            paddingBottom: 10,
            position: 'absolute',
            bottom: 16,
            right: 16,
            left: 16,
            borderRadius: 16,
          },
          tabBarLabelStyle: {
            fontSize: 14,
          },
          tabBarInactiveTintColor: '#000',
          headerShown: false,
        })}
      >
        <Tab.Screen name='Home' component={Home} options={{ tabBarLabel: 'Início' }} />
        <Tab.Screen name='Vaccines' component={Vaccines} options={{ tabBarLabel: 'Vacinas' }} />
        <Tab.Screen name='Locals' component={Locals} options={{ tabBarLabel: 'Postos' }} />
        <Tab.Screen name='News' component={News} options={{ tabBarLabel: 'Notícias' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
