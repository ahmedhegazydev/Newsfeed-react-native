import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  Switch,
  Button,
  View,
  TouchableOpacity,
} from "react-native";
import generalAction from "../actions/ServiceAction";
const actions = { generalAction };
const mapStateToProps = (state) => ({
  langDirection: state.langDirection.rtl,
});
export default connect(mapStateToProps, actions)(SettingsScreen);
