import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const toAddNewCrypto = createAsyncThunk(
  'cryptos/toAddNewCrypto',
  async (cryptoName: string) => {
    cryptoName = cryptoName.toLowerCase();
    return axios
      .get(`https://api.coingecko.com/api/v3/search?query=${cryptoName}`)
      .then(res => res.data.coins[0].id)
      .then(id =>
        axios.get(
          `https://api.coingecko.com/api/v3/coins/${id}?tickers=false&community_data=false&developer_data=false&sparkline=false`,
        ),
      )
      .then(res => res.data);
  },
);

export const fetchAllCryptos = () => dispatch => {
  axios
    .get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false`,
    )
    .then(res => dispatch(setCryptoList(res.data)))
    .catch(err => console.log(err));
};

export const cryptoSlice = createSlice({
  name: 'cryptos',
  initialState: {
    list: [],
    show: [],
  },
  reducers: {
    setCryptoList: (state, action) => {
      state.list = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(toAddNewCrypto.fulfilled, (state, action) => {
      let find = state.show.find(crypto => action.payload.id === crypto.id);

      if (!find) {
        state.show.push(action.payload);
      }
    });
  },
});

export const {setCryptoList} = cryptoSlice.actions;
export default cryptoSlice.reducer;
