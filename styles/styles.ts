import styled from 'styled-components/native';
import Theme from './Theme';

export const MyText = styled.Text`
  font-size: 25px;
  color: ${Theme.colors.white};
  font-weight: 700;
`;

export const Nav = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 140px;
  padding-top: 20px;
  flex-direction: row;
  background-color: ${Theme.colors['dark-blue']};
`;

export const ProfilePic = styled.Image`
  display: flex;
  width: 45px;
  height: 45px;
  border-radius: 50px;
`;

export const TouchableText = styled.Text`
  display: flex;
  color: ${Theme.colors.grey};
  font-size: 20px;
`;

export const CryptoContainer = styled.View`
  display: flex;
  align-items: center;
  flex: 5;
  margin: 5px;
`;

export const CardsContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  width: 75%;
  align-self: center;
`;

export const CardCryptoNameAndSymbol = styled.View`
  display: flex;
  justify-content: center;
  margin-left: 7%;
  margin-right: 40px;
`;

export const AddCryptoView = styled.SafeAreaView`
  display: flex;
  justify-content: space-around;
`;

export const GoBack = styled.TouchableOpacity`
  display: flex;
  justify-content: flex-start;
`;

export const GoBackText = styled.Text`
  color: grey;
  font-size: 17px;
`;

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-top: 50%;
`;

export const AddCurrency = styled.Text`
  color: black;
  font-size: 28px;
  font-weight: 700;
  display: flex;
  justify-content: flex-start;
`;

export const IntroduceCryptoInput = styled.TextInput`
  display: flex;
  padding-left: 7px;
  background-color: white;
  width: 300px;
  height: 40px;
  border: solid;
  margin-top: 10px;
`;

export const ButtonSave = styled.TouchableOpacity`
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
