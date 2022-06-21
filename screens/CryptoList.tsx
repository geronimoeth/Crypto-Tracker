import {Text, View, FlatList, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {cryptoData} from '../hardcode/messari';
import Card from './Card';
import {iteratorSymbol} from 'immer/dist/internal';

const CryptoList = () => {
  const [listData, setListData]: any = useState([]);

  return (
    <View>
      {cryptoData.length > 0 ? (
        <FlatList
          data={cryptoData}
          keyExtractor={item => item.id}
          renderItem={({item}) => <Card item={item} />}
        />
      ) : (
        <Text>No coins added yet</Text>
      )}
    </View>
  );
};

export default CryptoList;
