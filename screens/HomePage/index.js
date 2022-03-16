import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import styles from './styles';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FoodList: [],
    };
  }
  componentDidMount = async () => {};
  HandleNavigation = () => {
    this.props.navigation.navigate('CartPage');
  };

  render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.mainContainer}>
          <Text>Welcome</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default connect(null, null)(HomePage);
