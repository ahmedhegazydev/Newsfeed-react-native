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
import { LocalizationContext } from "../../util/LocalizationContext";
import {
  LIST_ALL_NEWS_NAME,
  MORE_DETAILS_NEWS_NAME,
} from "../../constants/constants";
const Stack = createStackNavigator();

export default function HomeScreen() {
  const { toggleTheme } = React.useContext(ThemeContext);

  const Url_Settings = "myapp://settings";
  const Url_Details = "myapp://details";
  const Url_All_News = "myapp://allNews";

  const { translate } = useContext(LocalizationContext);

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          paddingLeft: 40,
        },
        headerRight: () => (
          <View style={{ marginRight: 11 }}>
            <Button
              color="orange"
              title={translate("toggle_theme")}
              onPress={() => {
                toggleTheme();
              }}
            />
          </View>
        ),
      }}
    >
      <Stack.Screen
        options={({ route }) => ({ title: "News Feed" })}
        name={LIST_ALL_NEWS_NAME}
        component={ListAllNewsScreen}
      />
      <Stack.Screen
        options={({ route }) => ({ title: "More Details" })}
        name={MORE_DETAILS_NEWS_NAME}
        component={PreviewNewsDetailsScreen}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  btn_toggle_theme: {
    padding: 30,
  },
});
