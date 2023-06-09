import { AppRegistry, LogBox } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";

// Disable React Native warning message at the bottom
LogBox.ignoreAllLogs(true);

AppRegistry.registerComponent(appName, () => App);
