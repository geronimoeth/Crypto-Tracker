import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CardsContainer, CardCryptoNameAndSymbol} from '../styles/styles';

const Card = ({item}: any) => {
  const {symbol, name, current_price, price_change_percentage_24h, image} =
    item;

  return (
    <CardsContainer>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image style={styles.img} source={{uri: image}} />
        <CardCryptoNameAndSymbol>
          <Text style={{fontWeight: 'bold'}}>{name}</Text>
          <Text>{symbol.toUpperCase()}</Text>
        </CardCryptoNameAndSymbol>
      </View>
      <View style={styles.prices}>
        <Text style={{fontWeight: 'bold'}}>{current_price}$</Text>
        <Text>{price_change_percentage_24h.toFixed(2)}%</Text>
      </View>
    </CardsContainer>
  );
};

export default Card;

const styles = StyleSheet.create({
  img: {
    width: 48,
    height: 48,
  },
  prices: {
    alignItems: 'flex-end',
    paddingTop: 7,
  },
});
