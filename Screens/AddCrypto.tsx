import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableHighlightBase,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import styled from 'styled-components/native';

const AddCryptoView = styled.SafeAreaView`
  display: flex;
  justify-content: space-around;
`;

const GoBack = styled.TouchableOpacity`
  display: flex;
  justify-content: flex-start;
`;

const GoBackText = styled.Text`
  color: grey;
  font-size: 17px;
`;

const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-top: 50%;
`;

const AddCurrency = styled.Text`
  color: black;
  font-size: 28px;
  font-weight: 700;
  display: flex;
  justify-content: flex-start;
`;

const IntroduceCryptoInput = styled.TextInput`
  display: flex;
  padding-left: 7px;
  background-color: white;
  width: 300px;
  height: 40px;
  border: solid;
  margin-top: 10px;
`;

const ButtonSave = styled.TouchableOpacity`
  diplay: flex;
  align-self: flex-end;
  align-items: center;
  justify-content: center;
  margin-top: 12px;
  background-color: #fbd24d;
  height: 40px;
  width: 90px;
  border-radius: 5px;
`;

const AddCrypto = ({navigation}) => {
  const [crypto, setCrypto] = useState('');

  const changeCrypto = (text: string) => {
    setCrypto(text);
  };

  const saveCrypto = (text: string) => {};

  return (
    <AddCryptoView>
      <GoBack
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <GoBackText> &#8592; Back to list</GoBackText>
      </GoBack>
      <Container>
        <AddCurrency>Add a Cryptocurrency</AddCurrency>

        <IntroduceCryptoInput
          onChangeText={(text: string) => changeCrypto(text)}
          placeholder="Use a name or ticker symbol..."
          placeholderTextColor="grey"
          value={crypto}
        />
        <ButtonSave>
          <Text style={{color: 'grey'}}>Save</Text>
        </ButtonSave>
      </Container>
    </AddCryptoView>
  );
};

export default AddCrypto;

const styles = StyleSheet.create({});
