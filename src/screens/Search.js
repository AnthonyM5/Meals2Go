import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
} from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

const isAndroid = Platform.OS === "android";

const Search = () => {
  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.textView}>
          <Text>Search</Text>
        </View>
        <View style={styles.listView}>
          <Text>List Container</Text>
        </View>
        <ExpoStatusBar style="auto" />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  textView: {
    padding: 16,
    backgroundColor: "aquamarine",
  },
  listView: {
    flex: 1,
    padding: 16,
    backgroundColor: "aqua",
  },
});

export default Search;
