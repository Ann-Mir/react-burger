import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TABS} from '../../utils/constants';

interface ITabsState {
  activeTab: string;
}

const initialState: ITabsState = {
  activeTab: TABS.bun,
};

const tabSlice = createSlice({
  name: 'tab',
  initialState,
  reducers: {
    setActiveTab: (state, action: PayloadAction<string>) => {
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
