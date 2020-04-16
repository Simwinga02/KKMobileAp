import * as React from 'react';
import { View, Text,StyleSheet  } from 'react-native';

export default class ForgotPassScreen extends React.Component{ 
  render(){
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Forget Password</Text>
      </View>
    );
  }
}