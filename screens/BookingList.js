import React from 'react';
import { StyleSheet, View, FlatList, Image } from 'react-native';
import { VictoryBar, VictoryChart, VictoryTheme } from 'victory-native';
import { Button, Surface, Text } from 'react-native-paper';
import global from '../global';

export default class BookingList extends React.Component {
  state = {
    data: [],
    sum: [],
    user : null,
     
  };

  componentDidMount() {
    global.firebase.auth().onAuthStateChanged(
      (user)=>this.setState({user:user})
    );
    global.firebase
      .database()
      .ref('book2019')
      .on('value', snapshot => {
        var sum = [0, 0, 0];
        var v = snapshot.val();
        var data = [];
        for (var i in v) {
          sum[0] += v[i].confirmed;
          sum[1] += v[i].death;
          sum[2] += v[i].cure;
          data.push(v[i]);
        }
        this.setState({
          data: data,
          sum: sum,
        });
      });
  }
  login_pressed(){
    this.props.navigation.navigate("SignIn");
  }
  logout_pressed(){
 //global.app.setState({logined:false});
  //this.setState({});
  global.firebase.auth().signOut();
  }
  add_pressed(){
    this.props.navigation.navigate("Add");
  }
  toolbar(){
    if(this.state.user==null)
    return <View>
      <Button onPress={()=>this.login_pressed()}>Login</Button>
      <Button  onPress={()=>this.add_pressed()}>Book Appointment</Button>
      <Button onPress={()=>this.login_pressed()}>Contact Us</Button>
      <Button  onPress={()=>this.add_pressed()}>About Us</Button>
     </View>;

return <View style={{flexDirection:"row", padding: 10, justifyContent: "center"}}>
 
<Button  onPress={()=>this.logout_pressed()}>Logout</Button>
</View>;
  }
userbox(){
  if(this.state.user){
    return <View>
  
    </View>
  }
}
  render() {
    if (this.state.data.length == 0)
      return (
        <View style={styles.container}>
          <Text>Loading</Text>
        </View>
      );

    return (
      <View style={styles.container}>
          {this.toolbar()}
        <View style={styles.headertext}>
        {this.userbox()}
         
        <Text style={{fontSize: 25, fontWeight: "bold"}}>Booking Tracking</Text>
        </View>
        <View style={styles.headercols}>
          <Text style={styles.hcol2}>Full Names</Text>
          <Text style={styles.hcol1}>Cell Phone</Text>
         
          
        </View>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => this.renderItem(item)}
        />

      </View>
    );
  }

  renderItem(item) {
    var flag = item.name.toLowerCase();
    return (
      <View style={styles.item}>
       
        <Text style={styles.col2}>{item.name}</Text>
        <Text style={styles.col1}>{item.confirmed}</Text>

        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headertext: {
    padding: 1,
    fontSize: 18,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  item: {
    flexDirection: 'row',
    flex: 1,
    padding: 5,
    height: 42,
    alignItems: 'center',
  },
  col1: {
    flex: 1,
  },
  col2: {
    flex: 2,
  },
  headercols: {
    flexDirection: 'row',
    backgroundColor: '#A55',
    padding: 5,
  },
  hcol1: {
    flex: 1,
    fontWeight: 'bold',
  },
  hcol2: {
    flex: 2,
    fontWeight: 'bold',
  },
  footercols: {
    flexDirection: 'row',
    backgroundColor: '#A55',
    padding: 5,
  },
});
