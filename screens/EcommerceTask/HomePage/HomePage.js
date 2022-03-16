import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';

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
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.MainContainer}>
          <Text>Welcome</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Footer_wrap
});

const mapStateToProps = state => {
  return {
    product_list: state.ProductListReducer.product_list,
    cart_count: state.ProductListReducer.cart_count,
  };
};

export default connect(mapStateToProps, null)(HomePage);
