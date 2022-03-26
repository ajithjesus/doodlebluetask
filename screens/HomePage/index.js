import React, {Component} from 'react';
import {View, Image, Text, SafeAreaView, FlatList} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import styles from './styles';
import Header from '../../constant/components/Header';
import SearchInput from '../../constant/components/SearchInput';
import SubHeading from '../../constant/components/SubHeading';
import CardContainer from '../../constant/components/Card';
import Images from '../../constant/Images/Images';
import {QUOTES} from '../../constant/Data/AccountData';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotesData: QUOTES,
      filterList: QUOTES,
    };
  }

  // handleToRenderCard
  handleToRenderCard = item => {
    return (
      <CardContainer>
        <Ionicons name="heart" size={20} style={styles.cardHeartContianer} />
        <View style={styles.cardMainContainer}>
          <Image
            style={styles.cardImgContainer}
            source={Images.LeaderImage}
            resizeMode={'cover'}
          />
          <Text style={styles.cartTitle}>{item.text}</Text>
        </View>
        <View style={styles.cardAuthContainer}>
          <Text style={styles.cardAuthor}>{item.author}</Text>
        </View>
      </CardContainer>
    );
  };

  // handleToSearchHandler

  handleToSearchHandler = searchText => {
    if (searchText) {
      const newData = this.state.quotesData.filter(item => {
        const itemData = item.author
          ? item.author.toUpperCase()
          : ''.toUpperCase();
        const textData = searchText.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      this.setState({filterList: newData});
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <Header />
        <SearchInput onChangeText={val => this.handleToSearchHandler(val)} />
        <SubHeading title="Categories" />
        <FlatList
          contentContainerStyle={{flexGrow: 1}}
          keyExtractor={(item, index) => 'key' + index}
          data={this.state.filterList}
          renderItem={({item}) => this.handleToRenderCard(item)}
          ListEmptyComponent={
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text>Empty Data</Text>
            </View>
          }
        />
      </SafeAreaView>
    );
  }
}

export default connect(null, null)(HomePage);
