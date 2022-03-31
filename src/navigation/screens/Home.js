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
import { LIST_ALL_NEWS_NAME } from "../../constants/contants";
const Stack = createStackNavigator();

export default function HomeScreen({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={
        {
          // headerShown: false
        }
      }
    >
      <Stack.Screen name={LIST_ALL_NEWS_NAME} component={ListAllNewsScreen} />
      {/* <Stack.Screen component={ListAllNewsScreen}/> */}
    </Stack.Navigator>
  );
}
