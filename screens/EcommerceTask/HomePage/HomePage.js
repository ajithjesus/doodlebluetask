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



import * as ProductListActions from "../../../redux/action/ProductList";


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FoodList: [],
    };
  }
  componentDidMount() {
    this.props.dispatch(ProductListActions.getProductList(AccountData.DATA));
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

          <MapView
            style={styles.mapStyle}
            showsUserLocation={true}
            zoomEnabled={true}
            zoomControlEnabled={true}
            initialRegion={{
              latitude: 13.018264,
              longitude: 80.108939,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>
             

            <Marker
              coordinate={{ latitude: 13.0203877, longitude: 80.0976355 }}
              title={"JavaTpoint"}
              description={"Java Training Institute"}
            />
          </MapView>



        </View>

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  // Footer_wrap
});

const mapStateToProps = (state) => {
  return {
    product_list: state.ProductListReducer.product_list,
    cart_count: state.ProductListReducer.cart_count,
  };
};

export default connect(mapStateToProps, null)(HomePage);
