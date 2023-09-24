import { StyleSheet, Text } from "react-native";
import React from 'react'
import { NativeRouter, Routes,Route, Link } from "react-router-native";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
const RoutesPath = () => {
  return (
    <Routes>
      <Route exact path="/" element={<LoginScreen />} />
      <Route path="/home" element={<HomeScreen />} />

  </Routes>
  )
}


const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
  },
  header: {
    fontSize: 20
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  subNavItem: {
    padding: 5
  },
  topic: {
    textAlign: "center",
    fontSize: 15
  }
});


export default RoutesPath