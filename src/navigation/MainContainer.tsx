import React, { useState, useEffect, useContext } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HOME_NAME, SETTINGS_NAME } from "../constants/constants";
import SettingsScreen from "./screens/Settings";
import HomeScreen from "./screens/Home";
import { LocalizationContext } from "../util/LocalizationContext";
import { Icon } from "react-native-elements";
import Colors from "../util/Colors";

//npx uri-scheme open "myapp://app/allNews" --android
// npx uri-scheme open "myapp://app/allNews/3"
interface LinkingOptions {
  prefixes: string[];
  config: {
    screens: {
      [key: string]: string | { path: string };
    };
  };
}

function MainContainer() {
  const config = {
    screens: {
      Settings: "settings",
      Home: {
        screens: {
          ListAllNews: {
            path: "allNews/:id",
          },
          NewsDetails: {
            path: "details/:id",
          },
        },
      },
    },
  };

  const linking: LinkingOptions = {
    prefixes: ["myapp://app"],
    config,
  };

  const Tab = createBottomTabNavigator();
  const { translate } = useContext(LocalizationContext);

  return (
    <NavigationContainer linking={linking} theme={DefaultTheme}>
      <Tab.Navigator
        initialRouteName={HOME_NAME}
        screenOptions={({ route }) => ({
          headerShown: false,
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "grey",
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70 },
        }}
      >
        <Tab.Screen
          options={{
            title: translate("home"),
            tabBarIcon: ({ focused, color, size }) => (
              <Icon
                name="home"
                color={focused ? Colors.primary : Colors.lightgrey}
                size={24}
              />
            ),
          }}
          name={HOME_NAME}
          component={HomeScreen}
        />
        <Tab.Screen
          name={SETTINGS_NAME}
          options={{
            title: translate("setting"),
            tabBarIcon: ({ focused, color, size }) => (
              <Icon
                name="settings"
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
