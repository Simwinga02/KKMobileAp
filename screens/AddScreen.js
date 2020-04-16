import * as React from 'react';
import { View, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import global from "../global";

export default class AddScreen extends React.Component{ 
   state ={
     name : "",
     confirmed : "",
     death : "",
     cure : "",
   };
   save_press(){
     if(this.state.name.length==0){
       alert("Please populate all fields");
       return;
       
     }
    global.firebase
    .database()
    .ref('book2019').push(
      {
        name : this.state.name,
        confirmed : parseInt( this.state.confirmed)|0  ,
        death : parseInt( this.state.death)|0,
        cure : parseInt( this.state.cure)|0,
      }
    );
   }
    cancel_press(){
      this.props.navigation.navigate("Home");
    }

   render () {
     return(
       <View style={{flex:1}}>
         <TextInput
         label = 'Customer Name'
         value={this.state.name}
         onChangeText={name => this.setState({ name })}/>
          <TextInput
         label = 'Phone'
         value={this.state.confirmed}
         keyboardType='numeric'
         onChangeText={confirmed => this.setState({ confirmed })}/>
       
        <TextInput
        label = 'Email'
        value={this.state.death}
        onChangeText={death => this.setState({ death })}/>
  
      <TextInput
      label = 'Date of Appointment DD/MM/YYYY'
      value={this.state.cure}
      onChangeText={cure => this.setState({ cure })}/>
      <View style={{flexDirection: "row"}}>
        <Button onPress={()=>this.save_press()}>Save</Button>
        <Button onPress={()=>this.cancel_press()}>Cancel</Button>


      </View>
    </View>
     );
   }
}