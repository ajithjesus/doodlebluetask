import React , {useState} from 'react';
import { StyleSheet, Text, View,TouchableOpacity  } from 'react-native';
import colors from '../../../screens/EcommerceTask/Constant/Colors/Colors';
import FontFamily from '../../../screens/EcommerceTask/Constant/FontFamily/FontFamily';
  
export default function Buttton(props) {
  
  return (
    <TouchableOpacity onPress={props.handleToLogin} style={styles.container}>
       <Text style={styles.buttonContainer}>{props.title}</Text>
    </TouchableOpacity>
  );
}
  
const styles = StyleSheet.create({
  container: {
    padding:10
  },
  buttonContainer : {
  padding:10,
  color:colors.white,
  backgroundColor:colors.darkGreen,
  borderRadius:20,
  textAlign:'center',
  fontFamily: FontFamily.RalewayMedium,

  
//   backgroundColor:
  }
});