import React from 'react';
import {View, Image, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import Images from '../../../constant/Images/Images';
import CardContainer from '../../../constant/components/Card';

export default function CardList({item}) {
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
}
