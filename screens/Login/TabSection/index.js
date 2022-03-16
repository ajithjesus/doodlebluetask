import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './styles';

export default function TabSection({
  tabActiveId,
  handleChangeFirstTab,
  handleChangeSecondTab,
}) {
  return (
    <View style={styles.loginTabSection}>
      <View style={styles.loginTabWidth}>
        <TouchableOpacity onPress={handleChangeFirstTab}>
          <Text style={styles.loginTitle}>Login</Text>
        </TouchableOpacity>
        {tabActiveId === 1 && <Text style={styles.loginTitleBorder} />}
      </View>

      <View style={styles.loginTabWidth}>
        <TouchableOpacity onPress={handleChangeSecondTab}>
          <Text style={styles.loginTitle}>SIGNUP</Text>
        </TouchableOpacity>
        {tabActiveId === 2 && <Text style={styles.loginTitleBorder} />}
      </View>
    </View>
  );
}
