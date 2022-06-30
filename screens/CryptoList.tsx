import {Text, View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {cryptoData} from '../hardcode/messari';
import Card from './Card';
import {CryptoData} from '../interfaces/CryptoDataInterface';
import {fetchAllCryptos} from '../store/cryptos';
import {useDispatch, useSelector} from 'react-redux';

const CryptoList = () => {
  const dispatch = useDispatch();

  const {list, show} = useSelector(state => state.cryptos);

  useEffect(() => {
    dispatch(fetchAllCryptos());
  }, []);

  const renderCryptoCard = ({item}) => <Card item={item} />;

  return (
    <View>
      {show.length > 0 ? (
        <FlatList
          data={show}
          keyExtractor={item => item.id}
          renderItem={renderCryptoCard}
        />
      ) : (
        <Text>No coins added yet</Text>
      )}
    </View>
  );
};

export default CryptoList;
