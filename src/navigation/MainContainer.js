import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { HOME_NAME, SETTINGS_NAME } from '../constants/contants';
import SettingsScreen from './screens/Settings';
import HomeScreen from './screens/Home';


const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={HOME_NAME}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === HOME_NAME) {
              iconName = focused ? 'home' : 'home-outline';

            }
            //  else if (rn === detailsName) {
            //   iconName = focused ? 'list' : 'list-outline';} 
        else if (rn === SETTINGS_NAME) {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={HOME_NAME} component={HomeScreen} />
        {/* <Tab.Screen name={detailsName} component={DetailsScreen} /> */}
        <Tab.Screen name={SETTINGS_NAME} component={SettingsScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;