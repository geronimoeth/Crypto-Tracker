import {Text} from 'react-native';
import React, {useState} from 'react';
import {
  AddCryptoView,
  GoBack,
  GoBackText,
  Container,
  AddCurrency,
  IntroduceCryptoInput,
  ButtonSave,
} from '../styles/styles';
import {toAddNewCrypto} from '../store/cryptos';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from '../styles/stylesheet';

const AddCrypto = ({navigation}: any) => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const {show} = useSelector(state => state.cryptos);

  const saveCrypto = () => {
    dispatch(toAddNewCrypto(input));
    setInput('');
    navigation.goBack();
  };

  return (
    <AddCryptoView>
      <GoBack
        onPress={() => {
          navigation.goBack();
        }}>
        <GoBackText> &#8592; Back to list</GoBackText>
      </GoBack>
      <Container>
        <AddCurrency>Add a Cryptocurrency</AddCurrency>
        <IntroduceCryptoInput
          onChangeText={setInput}
          placeholder="Use a name or ticker symbol..."
          placeholderTextColor="grey"
          value={input}
        />
        <ButtonSave onPress={saveCrypto}>
          <Text style={styles.grey}>Save</Text>
        </ButtonSave>
      </Container>
    </AddCryptoView>
  );
};

export default AddCrypto;
