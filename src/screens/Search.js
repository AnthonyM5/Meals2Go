import React from "react";
import { 
  View, 
  Text, 
  SafeAreaView, 
  Platform,
  StatusBar
} from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";


const isAndroid = Platform.OS === 'android'

const Search = () => {
    return (
        <>
          <SafeAreaView style={{flex: 1, marginTop: StatusBar.currentHeight}}>
            <View style={{padding: 16, backgroundColor: 'aquamarine'}}>
              <Text>Search</Text>
            </View>
            <View style={{flex: 1, padding: 16, backgroundColor: 'aqua'}}>
              <Text>List Container</Text>
            </View>
          <ExpoStatusBar style="auto" />
          </SafeAreaView>
        </>
      );
}

export default Search