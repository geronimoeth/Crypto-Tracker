import {configureStore} from '@reduxjs/toolkit';

import cryptos from './cryptos';

export default configureStore({
  reducer: {
    cryptos,
  },
});
