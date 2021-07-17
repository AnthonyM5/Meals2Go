import React from "react";
import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import Home from "../Meals2Go/src/screens/Home";
// import Search from "../Meals2Go/src/screens/Search";
// import { Button } from "react-native";
import MainNavigator from "./src/navigation/MainNavigation";

// const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default App;
