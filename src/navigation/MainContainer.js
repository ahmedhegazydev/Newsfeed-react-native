import React, { useState, useEffect, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { HOME_NAME, SETTINGS_NAME } from "../constants/contants";
import SettingsScreen from "./screens/Settings";
import HomeScreen from "./screens/Home";
import { LocalizationContext } from "../contexts/LocalizationContext";
import { Icon } from "react-native-elements";
import Colors from "../util/Colors";

function MainContainer() {
  const config = {
    screens: {
      Settings: "settings",
      MORE_DETAILS_NEWS_NAME: "details",
      // screenB: "b",
      // screenC: "c",
    },
  };

  const linking = {
    prefixes: ["myapp://"],
    config,
  };
  const Tab = createBottomTabNavigator();
  const { translate } = useContext(LocalizationContext);

  return (
    <NavigationContainer linking={linking}>
      <Tab.Navigator
        initialRouteName={HOME_NAME}
        screenOptions={({ route }) => ({
          headerShown: false,
          // tabBarIcon: ({ focused, color, size }) => {
          //   let iconName;
          //   let rn = route.name;

          //   if (rn === HOME_NAME) {
          //     iconName = focused ? "home" : "home-outline";
          //   }
          //   //  else if (rn === detailsName) {
          //   //   iconName = focused ? 'list' : 'list-outline';}
          //   else if (rn === SETTINGS_NAME) {
          //     iconName = focused ? "settings" : "settings-outline";
          //   }

          //   // You can return any component that you like here!
          //   return <Ionicons name={iconName} size={size} color={color} />;
          // },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "grey",
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70 },
        }}
      >
        {/* <Tab.Screen name={HOME_NAME} component={HomeScreen} />
        <Tab.Screen name={SETTINGS_NAME} component={SettingsScreen} /> */}

        <Tab.Screen
          options={{
            title: translate("home"),
            tabBarIcon: ({ focused, color, size }) => (
              <Icon
                name="home-variant"
                type="material-community"
                color={focused ? Colors.primary : Colors.lightgrey}
                size={24}
              />
            ),
          }}
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen
          name="Settings"
          options={{
            title: translate("setting"),
            tabBarIcon: ({ focused, color, size }) => (
              <Icon
                name="settings"
                // type="material-community"
                type="material"
                color={focused ? Colors.primary : Colors.lightgrey}
                size={24}
              />
            ),
          }}
          component={SettingsScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
