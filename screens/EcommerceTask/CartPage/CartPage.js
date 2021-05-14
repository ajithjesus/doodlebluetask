import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  ScrollView,
  SafeAreaView
} from "react-native";
import { connect } from "react-redux";

import ListItem from "../Constant/ListItems/ListItems";
import { RadioButton } from "react-native-paper";

import * as ProductListActions from "../../../redux/action/ProductList";
import FontAwesomeIcon, { Icons } from "react-native-fontawesome";

class CartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart_total_list: [],
      delivery: "0",
    };
  }

  componentDidMount() {
    this.showMore_list();
  }

  HandleNavigation = () => {
    this.props.navigation.navigate("HomePage");
  };

  handleAddToCart = (id) => {
    this.props.dispatch(ProductListActions.addToCart(id));
  };
  handleToincrement = async (id) => {
    var sucess = await this.props.dispatch(
      ProductListActions.handleToIncrement(id)
    );
    if (sucess) {
      this.showMoreClick();
    }
  };
  handleTodecrement = async (id) => {
    var sucess = await this.props.dispatch(
      ProductListActions.handleToDecrement(id)
    );
    if (sucess) {
      this.showMoreClick();
    }
  };

  showMore_list = () => {
    let { cart_total_list } = this.state;
    for (var i = 0; i < this.props.cart_list.length; i++) {
      if (i < 1) {
        cart_total_list.push(this.props.cart_list[i]);
      }
    }
    this.setState({ cart_total_list: cart_total_list });
  };

  showMoreClick = () => {
    this.setState({ cart_total_list: this.props.cart_list });
  };

  Radio_Onchange = () => {
    if (this.state.delivery === "0") {
      this.setState({ delivery: "1" });
    } else {
      this.setState({ delivery: "0" });
    }
  };

  HeaderComponent = () => {
    return (
      <View>
        <View style={styles.Card_container}>
          <View style={styles.Total_Card}>
            <Text style={styles.Total_card_title}>Total Cost</Text>
            <Text style={styles.Total_card_amount}>
              $ {this.props.total_amount}
            </Text>
          </View>
        </View>
        <View style={{padding:10}}>
                <Text style={styles.List_title}>Starter</Text>
              </View>
      </View>
    );
  };

  FooterComponent=()=>
  {
return(
     <View style={{paddingBottom:80}}>

  <View style={styles.showMore_wrap}>
  <TouchableOpacity onPress={this.showMoreClick}>
    <Text style={styles.ShowMore_title}>Show More</Text>
  </TouchableOpacity>
</View>

<View style={{padding:10}} >
  <Text style={styles.Delivery_title}>Deleivery Options</Text>

  <View style={styles.Delivery_option_wrap}>
    <Text style={styles.delivery_radio_title}>Dine-in</Text>
    <RadioButton
      value="0"
      status={
        this.state.delivery === "0" ? "checked" : "unchecked"
      }
      onPress={this.Radio_Onchange}
    />
    <Text style={styles.delivery_radio_title}>Take away</Text>
    <RadioButton
      value="1"
      status={
        this.state.delivery === "1" ? "checked" : "unchecked"
      }
      onPress={this.Radio_Onchange}
    />
  </View>
</View>
</View>

)
  }

  render() {
    const { cart_total_list } = this.state;
    return (
      <SafeAreaView style={{ flex: 1 }}>

      <View style={styles.Container}>
       

       <FlatList
                 ListHeaderComponent={() => this.HeaderComponent()}
                 ListFooterComponent={() => this.FooterComponent()}
                  data={cart_total_list}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                    <ListItem
                      key={item.id}
                      first_number={item.first_number}
                      description={item.description}
                      second_number={item.second_number}
                      title={item.title}
                      quantity={item.quantity}
                      amount={item.amount}
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
     

        <View style={styles.Footer_wrap}>
          <Text style={styles.Footer_text}>
            
            Place Order
          </Text>
        </View>
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
  Card_container: {
  height:250,
    backgroundColor: "#0a1e2e",
    justifyContent: "center",
    alignItems: "center",
  },
  Content_wrap: {
    backgroundColor: "white",
  },

  Total_Card: {
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    margin: 20,
    padding: 20,
    width: "50%",
    textAlign: "center",
    borderRadius: 10,
  },
  Total_card_title: {
    fontSize: 20,
    color: "orange",
    textAlign: "center",
    paddingBottom: 5,
  },
  Total_card_amount: {
    fontSize: 20,
    color: "black",
    textAlign: "center",
  },

  showMore_wrap: {
    display: "flex",
    justifyContent: "flex-end",
    padding:10
  },
  ShowMore_title: {
    display: "flex",
    justifyContent: "flex-end",
    color: "green",
    textAlign: "right",
    textDecorationLine: "underline",
    color: "green",
  },

  Delivery_title: {
    fontSize: 18,
    color: "black",
  },
  Delivery_option_wrap: {
    flexDirection: "row",
    marginTop: 15,
    alignItems: "center",
    display: "flex",
    justifyContent: "space-around",
    width: "80%",
  },
  delivery_radio_title: {
    fontSize: 18,
  },

  //   List_wrap

  List_wrap: {
    padding: 20,
  },
  List_title: {
    fontSize: 24,
    color: "black",
    paddingBottom: 10,
  },
  //   Footer_wrap

  Footer_wrap: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "#0a1e2e",
    color: "white",
    padding: 10,
    width: "100%",
    textAlign: "center",
  },
  Footer_text: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },

  // Footer_wrap
});

const mapStateToProps = (state) => {
  return {
    cart_list: state.ProductListReducer.cart_list,
    total_amount: state.ProductListReducer.total_amount,
  };
};

export default connect(mapStateToProps, null)(CartPage);
