import React, { useState, useEffect, useContext } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Linking,
  TouchableOpacity,
} from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import ListAllNewsScreen from "./ListAllNews";

import PreviewNewsDetailsScreen from "./PreviewNewsDetails";
import { ThemeContext } from "../../util/ThemeManager";
import { Link } from "@react-navigation/native";
import { LocalizationContext } from "../../contexts/LocalizationContext";
import {
  LIST_ALL_NEWS_NAME,
  MORE_DETAILS_NEWS_NAME,
} from "../../constants/constants";
const Stack = createStackNavigator();

export default function HomeScreen({ navigation }) {
  const { toggleTheme } = React.useContext(ThemeContext);

  const Url_Settings = "myapp://settings";
  // const Url_Details = `myapp://${MORE_DETAILS_NEWS_NAME}`;
  const Url_Details = "myapp://details";
  const { translate } = useContext(LocalizationContext);

  return (
    <Stack.Navigator
      screenOptions={{
        // headerShown: false,
        headerLeft: () => (
          <Button
            title="Deep Settings"
            onPress={() => {
              // console.log("Depp Settings");
              Linking.openURL(Url_Settings);
              // Linking.openURL(Url_Details);
            }}
          />
        ),
        headerRight: () => (
          <Button
            title={translate("toggle_theme")}
            onPress={() => {
              toggleTheme();
            }}
          />
        ),
      }}
    >
      <Stack.Screen
        options={({ route }) => ({ title: "Wall Street Journal" })}
        name={LIST_ALL_NEWS_NAME}
        component={ListAllNewsScreen}
      />
      <Stack.Screen
        options={({ route }) => ({ title: "" })}
        add
        name={MORE_DETAILS_NEWS_NAME}
        component={PreviewNewsDetailsScreen}
      />
    </Stack.Navigator>
  );
}
