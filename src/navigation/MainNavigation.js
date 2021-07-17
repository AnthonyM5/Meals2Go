import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Search from "../screens/Search";
import { Button } from "react-native";

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={({ navigation }) => ({
            headerRight: () => (
              <Button
                title="Search"
                onPress={() => navigation.navigate("Search")}
              />
            ),
          })}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={({ navigation }) => ({
            headerRight: () => (
              <Button
                title="Home"
                onPress={() => navigation.navigate("Home")}
              />
            ),
          })}
        />
      </Stack.Navigator>
    </>
  );
};

export default MainNavigator;
