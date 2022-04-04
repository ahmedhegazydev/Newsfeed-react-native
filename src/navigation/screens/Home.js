import * as React from "react";
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
import {
  LIST_ALL_NEWS_NAME,
  MORE_DETAILS_NEWS_NAME,
} from "../../constants/contants";
import PreviewNewsDetailsScreen from "./PreviewNewsDetails";
import { ThemeContext } from "../../util/ThemeManager";
import { Link } from "@react-navigation/native";
const Stack = createStackNavigator();

export default function HomeScreen({ navigation }) {
  const { toggleTheme } = React.useContext(ThemeContext);

  const Url_Settings = "myapp://settings";
  // const Url_Details = `myapp://${MORE_DETAILS_NEWS_NAME}`;
  const Url_Details = "myapp://details";

  return (
    <Stack.Navigator
      screenOptions={{
        // headerShown: false
        // headeTransparent: true,
        // headerTitle: "",
        // headerTintColor: "white",
        // headerLeftContainerStyle: {
        //   width: 40,
        //   height: 40,
        //   borderRadius: 20,
        //   backgroundColor: "rgba(92, 90, 91, 0.7)",
        //   alignItems: "center",
        //   marginLeft: 10,
        // },
        headerLeft: () => (
          <Button
            title="Depp Settings"
            onPress={() => {
              // console.log("Depp Settings");
              // Linking.openURL(Url_Settings);
              Linking.openURL(Url_Details);
            }}
          />
        ),
        headerRight: () => (
          <Button
            title="Toggle Theme"
            onPress={() => {
              // console.log("Toggle Theme");
              toggleTheme();
            }}
          />
        ),
      }}
    >
      <Stack.Screen name={LIST_ALL_NEWS_NAME} component={ListAllNewsScreen} />
      <Stack.Screen
        screenOptions={{
          headerShown: false,
        }}
        name={MORE_DETAILS_NEWS_NAME}
        component={PreviewNewsDetailsScreen}
      />
    </Stack.Navigator>
  );
}
