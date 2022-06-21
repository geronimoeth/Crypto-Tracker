import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import CryptoList from './CryptoList';

import {
  MyText,
  Nav,
  ProfilePic,
  TouchableText,
  CryptoContainer,
} from '../styles/styles';

const Home = ({navigation}: any) => (
  <View style={{flex: 1}}>
    <Nav>
      <MyText>CryptoTracker Pro</MyText>
      <ProfilePic source={require('../Pictures/profilepicture.jpeg')} />
    </Nav>
    <CryptoContainer style={{flex: 1}}>
      <CryptoList />
    </CryptoContainer>
    <TouchableOpacity
      style={{marginBottom: 10, justifyContent: 'center', alignSelf: 'center'}}
      onPress={() => {
        navigation.navigate('Home');
      }}>
      <TouchableText>+ Add a Cryptocurrency</TouchableText>
    </TouchableOpacity>
  </View>
);

export default Home;
