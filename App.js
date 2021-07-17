import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../MealsApp/src/screens/Home";
import Search from "../MealsApp/src/screens/Search";
import { Button } from "react-native";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen 
          name="Home" 
          component={Home} 
          options={ ({ navigation }) => ({
            headerRight: () =>
            <Button 
            title="Search"
            onPress={() => navigation.navigate('Search')}/>
          })}
          />
          <Stack.Screen 
          name="Search" 
          component={Search}
          options={ ({navigation}) => ({
            headerRight: () =>
            <Button 
            title="Home"
            onPress={() => navigation.navigate('Home')}/>
          })} 
          />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App


