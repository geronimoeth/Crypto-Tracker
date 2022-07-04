import {Image, Text, View} from 'react-native';
import React from 'react';
import {
  CardsContainer,
  CardCryptoNameAndSymbol,
  PriceChangedTextHigh,
  PriceChangedTextLow,
} from '../styles/styles';
import {CryptoData} from '../interfaces/CryptoDataInterface';
import {styles} from '../styles/stylesheet';

const Card = ({item}) => {
  const {symbol, name, market_data, image}: CryptoData = item;

  const imgUri = image.large;
  const priceInUsd = market_data.current_price.usd;
  const priceChangePercentage24h =
    market_data.price_change_percentage_24h.toFixed(2);

  return (
    <CardsContainer>
      <View style={styles.container}>
        <Image style={styles.img} source={{uri: imgUri}} />
        <CardCryptoNameAndSymbol>
          <Text style={styles.bold}>{name}</Text>
          <Text>{symbol.toUpperCase()}</Text>
        </CardCryptoNameAndSymbol>
      </View>
      <View style={styles.prices}>
        <Text style={styles.bold}>{priceInUsd}$</Text>
        {priceChangePercentage24h >= 0 ? (
          <PriceChangedTextHigh>
            &#8599; {priceChangePercentage24h}%
          </PriceChangedTextHigh>
        ) : (
          <PriceChangedTextLow>
            &#8601; {priceChangePercentage24h}%
          </PriceChangedTextLow>
        )}
      </View>
    </CardsContainer>
  );
};

export default Card;
