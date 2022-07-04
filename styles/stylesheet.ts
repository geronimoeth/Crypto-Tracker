import {StyleSheet} from 'react-native';
import Theme from './Theme';

export const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
  },
  img: {
    width: 48,
    height: 48,
  },
  prices: {
    alignItems: 'flex-end',
    paddingTop: 7,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flex: {
    flex: 1,
  },
  grey: {
    color: Theme.colors.grey,
  },
});
