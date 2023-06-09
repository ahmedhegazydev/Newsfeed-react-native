/**
 * @format
 */

import { AppRegistry, LogBox } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";

//disable react native warning message at the bottom
console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => App);
