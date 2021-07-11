
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, Platform} from 'react-native';


export default Home = () => {
    return (
        <View style={styles.container}>
          <Text>Meals2Go App</Text>
          <StatusBar style="auto" />
        </View>
      );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });