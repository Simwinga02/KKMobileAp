import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class SignUpScreen extends React.Component{ 
  render(){
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Sign Up Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});