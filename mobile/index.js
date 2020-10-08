/** @format */

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import Login from "./screens/Login";

console.disableYellowBox = true;
console.ignoredYellowBox = ["Remote debugger"];
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

AppRegistry.registerComponent(appName, () => App);