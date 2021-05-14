import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";



 const ListItems = (props) => (
  <View style={styles.Data_wrap}>
    <View style={styles.Data_innerwrap}>
      <View style={styles.Data_Number_wrap}>
        <Text style={styles.Data_Number}>{props.first_number}</Text>
        <Text style={styles.Data_Number}>{props.second_number}</Text>
      </View>
      <View>
        <Text style={styles.Data_title}>{props.title}</Text>
        <Text style={styles.Data_title}>
        {props.description}
        </Text>
        <Text style={styles.Data_amount}>$ {props.amount} </Text>
      </View>
    </View>
    {
            props.quantity===0 &&
    <TouchableOpacity onPress={props.handleAddToCart}>
    <View style={styles.Data_addtext}>
        <Text style={styles.Data_add_button}>Add</Text>
    </View>
    </TouchableOpacity>
}
{
    props.quantity>0 &&
   
        <View style={styles.card_increment_wrap}>
           <TouchableOpacity onPress={props.decrement}>
            <Feather name="minus" size={20} color='black' />
            </TouchableOpacity>

    
            <Text>{props.quantity}</Text>
          
        <TouchableOpacity disabled={props.quantity===19} onPress={props.increment}>
        <Feather name="plus" size={20} color='black' />
            </TouchableOpacity>
           


        </View>

}


  </View>
);

const styles = StyleSheet.create({


  // Data_wrap
  Data_wrap: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor:'gray',
    borderBottomWidth:.9,
    marginBottom: 10,
    padding:10,
    margin:10
  },
  Data_add_button: {
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: "white",
  },
  Data_innerwrap: {
    display: "flex",
    flexDirection: "row",
  
  },
  Data_Number: {
    padding: 5,
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 5,
    textAlign: "center",
  },
  Data_Number_wrap: {
    marginRight: 10,
  },
  Data_title: {
    fontSize: 17,
    color: "black",
  },
  Data_amount: {
    color: "orange",
    fontSize: 17,
  },

  card_increment_wrap:
  {
    display:'flex',
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center',
    borderColor:'gray',
    borderWidth:.5,
    height:40,
    width:100,
    padding:5,
  }

  // Data_wrap
});


export default ListItems;