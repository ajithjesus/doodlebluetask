import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { connect } from "react-redux";
import Images from "../Constant/Images/Images";
import * as AccountData from "../Constant/Data/AccountData";
import ListItem from "../Constant/ListItems/ListItems";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import {APP_URL} from '../../../api/api';
import axios from 'axios';




import * as ProductListActions from "../../../redux/action/ProductList";


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FoodList: [],
    };
  }
  componentDidMount =async()=> {
    const tokenvalue = AsyncStorage.getItem('token');

    alert(tokenvalue);
    // axios({
    //   method: 'POST',
    //   url: `${APP_URL}/homelist`,
    //   data: {

    //   },
    // })
    //   .then(res => {
        
    //    alert("Register Successfully" + JSON.stringify(res));
    //    this.setState({
    //        name:'',email:'',password:'',tabActiveId:1
    //    })
    //   })
    //   .catch(err => {
    //     alert("err"+ JSON.stringify(err));
    //     console.log('error in request', err);
    //   });
  }
  HandleNavigation = () => {
    this.props.navigation.navigate("CartPage");
  };
  handleAddToCart = (id) => {
    this.props.dispatch(ProductListActions.addToCart(id));
  };
  handleToincrement = (id) => {
    this.props.dispatch(ProductListActions.handleToIncrement(id));
  };
  handleTodecrement = (id) => {
    this.props.dispatch(ProductListActions.handleToDecrement(id));
  };



  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.MainContainer}>
          <Text>Welcome</Text>




        </View>

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer:
  {
    flex:1,
    backgroundColor:"white",
    justifyContent:'center',
    alignItems:'center'
  }

  // Footer_wrap
});

const mapStateToProps = (state) => {
  return {
    product_list: state.ProductListReducer.product_list,
    cart_count: state.ProductListReducer.cart_count,
  };
};

export default connect(mapStateToProps, null)(HomePage);
