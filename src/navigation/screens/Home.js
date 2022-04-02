import * as React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import ListAllNewsScreen from "./ListAllNews";
import {
  LIST_ALL_NEWS_NAME,
  MORE_DETAILS_NEWS_NAME,
} from "../../constants/contants";
import PreviewNewsDetailsScreen from "./PreviewNewsDetails";
const Stack = createStackNavigator();

export default function HomeScreen({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={
        {
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
        }
      }
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
