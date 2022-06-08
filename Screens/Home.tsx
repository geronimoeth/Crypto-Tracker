import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';

const MyText = styled.Text`
  font-size: 25px;
  color: white;
  font-weight: 700;
`;

const Nav = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 140px;
  padding-top: 20px;
  flex-direction: row;
  background-color: #385775;
`;

const ProfilePic = styled.Image`
  display: flex;
  width: 45px;
  height: 45px;
  border-radius: 50px;
`;

const TouchableText = styled.Text`
  display: flex;
  color: grey;
  font-size: 20px;
`;

const CryptoContainer = styled.View`
  display: flex;
  align-items: center;
`;

const CryptoList = ({navigation}) => {
  return (
    <View>
      <Nav>
        <MyText>CryptoTracker Pro</MyText>
        <ProfilePic source={require('../Pictures/profilepicture.jpeg')} />
      </Nav>

      <CryptoContainer>
        <View>
          <Text>Crypto's here</Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AddCrypto');
          }}>
          <TouchableText>+ Add a Cryptocurrency</TouchableText>
        </TouchableOpacity>
      </CryptoContainer>
    </View>
  );
};

export default CryptoList;

const styles = StyleSheet.create({});
