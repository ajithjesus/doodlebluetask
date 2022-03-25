import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import styles from './styles';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount = async () => {
    fetch('https://type.fit/api/quotes')
      .then(response => response.json())
      .then(list => {
        this.setState({data: list});
      });
  };

  render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <View>
          {this.state.data?.map((item, id) => {
            return <Text key={id}>{item.author}</Text>;
          })}
        </View>
      </SafeAreaView>
    );
  }
}

export default connect(null, null)(HomePage);
