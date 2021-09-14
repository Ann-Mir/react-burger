import { createSlice } from '@reduxjs/toolkit';
import {TABS} from '../../utils/constants';


const tabSlice = createSlice({
  name: 'tab',
  initialState: {
    activeTab: TABS.bun,
  },
  reducers: {
    setActiveTab: (state, action) => {
      console.log(action.payload);
      if (state.activeTab !== action.payload) {
        state.activeTab = action.payload;
      }
    },
    setDefault: (state) => {
      state.activeTab = TABS.bun;
    }
  }
});


export const {setActiveTab} = tabSlice.actions;
export default tabSlice.reducer;
