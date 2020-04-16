import * as firebase from "firebase";
import {DarkTheme, DefaultTheme} from 'react-native-paper';

var firebaseConfig = {
      apiKey: "AIzaSyCfBImzw2mm3xz9LNuEMdEcxgvlxVCvriQ",
      authDomain: "mobile2-23b21.firebaseapp.com",
      databaseURL: "https://mobile2-23b21.firebaseio.com",
      projectId: "mobile2-23b21",
      storageBucket: "mobile2-23b21.appspot.com",
      messagingSenderId: "1007804660737",
      appId: "1:1007804660737:web:eeb9256366617519c9d400",
      measurementId: "G-ZCLRM9Z7N4"
    };
    // Initialize Firebase

 if(firebaseConfig.apiKey != undefined && !firebase.inited ){    
    firebase.initializeApp(firebaseConfig);  
    firebase.inited = true;
 }

/*
const theme = {
  dark: false,
  colors: {
          primary: '#000',
          accent: '#FA0',
          background: '#EEE',
          surface : '#777',
          text: '#555',
          card: '#999',
          border : '#666',
    },    
}   
*/
global.app = null;
global.firebase = firebase, 
global.theme = DarkTheme, 
global.config = firebaseConfig, 

global.comma = function(num){
   return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default global;