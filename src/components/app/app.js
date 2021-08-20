import React from 'react';
import MainPage from '../pages/main-page/main-page';

import {data} from '../../utils/data';


function App() {

  const state = React.useState({
    isLoading: false,
    ingredients: [],
    isError: false,
  });

  return <MainPage data={data}/>
}

export default App;
