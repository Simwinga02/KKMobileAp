import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Button,Surface,Text } from 'react-native-paper';
import { TextInput } from 'react-native-paper';

import global from "../global";

// icon สามารถเลือกได้ที่ 
// https://callstack.github.io/react-native-paper/icons.html
//

export default class SignInScreen extends React.Component{ 
  state = {
    email:"admin@gmail.com",
    password : ""
  }

  componentDidMount(){
    global.firebase.auth().onAuthStateChanged(
      (user)=>{
        if(user){
          this.props.navigation.navigate("Bookings");
        }
      }
    );
  }
  render(){
    return (   
      <Surface style={styles.container} >
       <TextInput
        label='Email'
        value={this.state.email}
        onChangeText={text => this.setState({ email:text })}
      />
       <TextInput
        label='Password'
        value={this.state.password}
        secureTextEntry={true} autoCorrect={false}
        onChangeText={text => this.setState({ password:text })}
      />
        <Button  onPress={()=>this.login()}>Sign In</Button>
   
        
      </Surface>
      );
    }
  
  async login(){
    try {
      await global.firebase.auth().signInWithEmailAndPassword(
        this.state.email,
        this.state.password
      );
      
    } catch (error) {
      alert(error);
      
    }
   
     /*var { navigation } = this.props;
     global.app.setState({logined:true});
     //navigation.navigate('Home');
     navigation.replace("Home");*/
  } 
  /*fblogin(){
     var { navigation } = this.props;
     global.app.setState({logined:true});
     //navigation.navigate('Home');
     navigation.replace("Home");
  } 
  googlelogin(){
     var { navigation } = this.props;
     global.app.setState({logined:true});
     //navigation.navigate('Home');
     navigation.replace("Home");
  }  

  register(){
    var { navigation } = this.props;
    navigation.navigate("SignUp");
  }  */
}



  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });