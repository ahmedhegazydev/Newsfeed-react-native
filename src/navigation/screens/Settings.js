import React, { useState, useEffect } from "react";
import { StyleSheet, Text, Switch, View, TouchableOpacity } from "react-native";
// import { AsyncStorage } from "@react-native-async-storage/async-storage";
// import AsyncStorage from "@react-native-community/async-storage";
import { AsyncStorage } from "react-native";

import { KEY_STORE_LANGUAGE } from "../../constants/contants";

export default function SettingsScreen({ navigation }) {
  const toggleSwtich = () => {
    setIsEnabled((previouseState) => !previouseState);
    _storeData();
    // _retrieveData();
  };

  const _storeData = async () => {
    try {
      await AsyncStorage.setItem(KEY_STORE_LANGUAGE, JSON.stringify(isEnabled));
    } catch (error) {
      // Error saving data
      console.log("error _storeData" + error);
    }
  };

  // useEffect(() => {
  //   _retrieveData();
  // }, [isEnabled]);

  const _retrieveData = async () => {
    let enabling = false;
    try {
      const value = await AsyncStorage.getItem(KEY_STORE_LANGUAGE);
      if (value !== null) {
        // console.log(value);
        // console.log(Boolean(value));
        // setIsEnabled(JSON.parse(value));
        // if (value === "true") {
        //   setIsEnabled(true);
        //   console.log(true);
        // } else {
        //   setIsEnabled(false);
        //   console.log(false);
        // }
        enabling = JSON.parse(value);
      }
    } catch (error) {
      // Error retrieving data
      console.log("error _retrieveData" + error);
    }
    return enabling;
  };

  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <View style={styles.container}>
      {/* <Text>Settings!</Text> */}
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        // ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwtich}
        value={isEnabled}
        // ios_backgroundColor="red"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
