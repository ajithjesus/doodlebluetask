import React, {Component} from 'react';
import {SafeAreaView, FlatList, View, Text} from 'react-native';
import {connect} from 'react-redux';
import styles from './styles';
import Header from '../../constant/components/Header';
import SearchInput from '../../constant/components/SearchInput';
import SubHeading from '../../constant/components/SubHeading';
import {QUOTES} from '../../constant/Data/AccountData';
import EmptyRecord from '../../constant/components/EmptyRecord';
import {FilterSearchText} from '../../utitlites/helpersFunction';
import CardList from './CardList';
import PageLoader from '../../constant/components/PageLoader';
import {STRINGS} from '../../utitlites/strings';
import {TouchableOpacity} from 'react-native-gesture-handler';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotesData: QUOTES,
      filterList: QUOTES,
      loaderVisible: false,
      categories: [
        {
          id: 1,
          name: 'All',
        },
        {
          id: 2,
          name: 'Love',
        },
        {
          id: 1,
          name: 'Sad',
        },
      ],
      categoriesHightlight: 'All',
    };
  }

  // handleToSearchHandler
  handleToSearchHandler = searchText => {
    const {quotesData} = this.state;
    if (searchText) {
      let SearchResult = FilterSearchText(quotesData, searchText);
      this.setState({filterList: SearchResult});
    }
  };

  // handleToFilterCategories

  handleFilterCat = val => this.setState({categoriesHightlight: val});

  render() {
    const {loaderVisible, filterList, categories, categoriesHightlight} =
      this.state;
    return (
      <SafeAreaView style={styles.homeContainer}>
        <PageLoader visible={loaderVisible} />
        <Header />
        <SearchInput onChangeText={val => this.handleToSearchHandler(val)} />
        <SubHeading title={STRINGS.Categories} />

        <View style={styles.categoriesContainer}>
          <FlatList
            contentContainerStyle={styles.flatlistContainer}
            keyExtractor={(item, index) => 'key' + index}
            data={categories}
            horizontal
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => this.handleFilterCat(item.name)}>
                <Text
                  style={
                    item?.name === categoriesHightlight
                      ? [
                          styles.categoriesTitle,
                          styles.categoriesTitleHighlight,
                        ]
                      : styles.categoriesTitle
                  }>
                  {item?.name}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <FlatList
          contentContainerStyle={styles.flatlistContainer}
          keyExtractor={(item, index) => 'key' + index}
          data={filterList}
          renderItem={({item, index}) => <CardList item={item} />}
          ListEmptyComponent={<EmptyRecord />}
        />
      </SafeAreaView>
    );
  }
}

export default connect(null, null)(HomePage);
