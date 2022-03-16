import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import colors from '../../Colors/Colors';
import FontFamily from '../../FontFamily/FontFamily';

export default function Buttton(props) {
  return (
    <TouchableOpacity onPress={props.handleToLogin} style={styles.container}>
      <Text style={styles.buttonContainer}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  buttonContainer: {
    padding: 10,
    color: colors.white,
    backgroundColor: colors.darkGreen,
    borderRadius: 20,
    textAlign: 'center',
    fontFamily: FontFamily.RalewayMedium,

    //   backgroundColor:
  },
});
