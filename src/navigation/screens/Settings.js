import * as React from "react";
import { StyleSheet, Text, Switch, View, TouchableOpacity } from "react-native";

export default function SettingsScreen({ navigation }) {
  const [isEnabled, setIsEnabled] = React.useState(false);

  const toggleSwtich = () => {
    setIsEnabled((previouseState) => !previouseState);
  };

  return (
    <View style={styles.container}>
      {/* <Text>Settings!</Text> */}
      <Switch
        rackColor={{ fasle: "red", true: "green" }}
        thumbColor={isEnabled ? "yellow" : "pink"}
        onValueChange={toggleSwtich}
        value={isEnabled}
        ios_backgroundColor="red"
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
