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



import * as ProductListActions from "../../../redux/action/ProductList";

const Card = () => {
  return (
    <View style={styles.Card_wrap}>
      <Text style={styles.Card_title}>Inka Restaraunt</Text>
      <Text style={styles.Card_time}>
        5.0(200) | All days : 09:00 AM - 06:00 PM
      </Text>
      <Text style={styles.Card_time}>Reach us at : 9854562142</Text>
      <View style={styles.Card_button_wrap}>
        <Text style={styles.Card_button}>BOOK A TABLE</Text>
      </View>
    </View>
  );
};

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

  HeaderComponent = () => {
    return (
      <View>
        <View style={styles.Image_wrap}>
          <ImageBackground
            source={Images.HomepageBackgorund}
            style={styles.image}
          >
           <View style={styles.Icon_wrap}>
             <View>
             <TouchableOpacity 
            >
              <Ionicons name="arrow-back" size={30} color='white' />
                    </TouchableOpacity>
             </View>
             <View style={styles.IconInner_wrap}>
             
              <Ionicons name="share-outline" size={30} color='white' />
              <Feather name="info" size={30} color='white' />
                    

             </View>
           </View>
          </ImageBackground>
        </View>
        <Card />
        <View style={{padding:10}}>
          <Text style={styles.List_title}>Starter</Text>
        </View>
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.Container}>
          <FlatList
            ListHeaderComponent={() => this.HeaderComponent()}
            data={this.props.product_list}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ListItem
                first_number={item.first_number}
                description={item.description}
                second_number={item.second_number}
                title={item.title}
                amount={item.amount}
                quantity={item.quantity}
                increment={() => {
                  this.handleToincrement(item.id);
                }}
                decrement={() => {
                  this.handleTodecrement(item.id);
                }}
                handleAddToCart={() => {
                  this.handleAddToCart(item.id);
                }}
              />
            )}
          />

          <View style={styles.Menu_wrap}>
            <View style={styles.Menu_inner}>
            <Feather name="menu" size={20} color='white' />
              <Text style={styles.Menu_title}>
            
                MENU </Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={this.HandleNavigation}
            style={styles.Footer_wrap}
          >
            <Ionicons name="cart-outline" size={20} color='white' />
            <Text style={styles.Footer_text}>
              VIEW CART ({this.props.cart_count} ITEMS)
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "white",
  },
  Image_wrap: {
    height: 200,
  },
  Content_wrap: {
    backgroundColor: "white",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  TextContainer: {
    color: "white",
  },

  //   Card Design
  Content_inner_wrap: {
    top: -100,
  },
  Card_wrap: {
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    margin: 20,
    padding: 20,
    width: "90%",
    top: -100,
    marginBottom:-100

  },

  Card_title: {
    fontSize: 26,
    color: "black",
    textAlign: "center",
    marginBottom: 10,
  },
  Card_button_wrap: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
  },
  Card_button: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#0a1e2e",
    textAlign: "center",
    color: "white",
    display: "flex",
    justifyContent: "center",
    width: "50%",
    alignItems: "center",
  },
  Card_time: {
    fontSize: 16,
    color: "black",
    textAlign: "center",
    paddingBottom: 10,
  },
  //   Card Design

  //   List_wrap

  List_wrap: {
    padding: 20,
  },

  Icon_wrap:
  {
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:10
  },
  IconInner_wrap:
  {
    display:'flex',
    flexDirection:'row',
   
  },

  //   Footer_wrap

  Footer_wrap: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "#0a1e2e",
    color: "white",
    padding: 15,
    width: "100%",
    textAlign: "center",
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  Footer_text: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    paddingLeft:10,
  },
  Menu_wrap: {
    position: "absolute",
    bottom: 50,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  Menu_inner: {
    padding: 10,
    backgroundColor: "orange",
    width: "25%",
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  Menu_title: {
    color: "white",
    textAlign: "center",
    paddingLeft:10
  },
  List_title: {
    fontSize: 24,
    color: "black",
    paddingBottom: 10,
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
