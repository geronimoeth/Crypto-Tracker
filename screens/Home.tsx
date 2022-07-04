import {View, StyleSheet} from 'react-native';
import React from 'react';
import CryptoList from './CryptoList';
import {
  MyText,
  Nav,
  ProfilePic,
  TouchableText,
  CryptoContainer,
  AddCryptoCurrency,
} from '../styles/styles';
import {styles} from '../styles/stylesheet';

const Home = ({navigation}: any) => (
  <View style={styles.flex}>
    <Nav>
      <MyText>CryptoTracker Pro</MyText>
      <ProfilePic source={require('../Pictures/profilepicture.jpeg')} />
    </Nav>
    <CryptoContainer style={styles.flex}>
      <CryptoList />
    </CryptoContainer>
    <AddCryptoCurrency onPress={() => navigation.navigate('AddCrypto')}>
      <TouchableText>+ Add a Cryptocurrency</TouchableText>
    </AddCryptoCurrency>
  </View>
);

export default Home;
