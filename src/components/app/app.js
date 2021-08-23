import React, {useEffect} from 'react';
import {adaptIngredientToClient} from '../../adapter/adapter';
import {BASE_URL} from '../../utils/constants';
import ErrorAlert from '../error-alert/error-alert';
import Modal from '../modal/modal';
import MainPage from '../pages/main-page/main-page';

import Spinner from '../spinner/spinner';


function App() {

  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);
  const [ingredients, setIngredients] = React.useState([]);

  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        setIsError(true);
      })
      .then(({ data }) => {
        const burgerIngredients = data.map((item) => adaptIngredientToClient(item));
        setIngredients(burgerIngredients);
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      {isLoading && <Spinner />}
      {isError && <ErrorAlert />}
      {!isLoading && !isError && <MainPage data={ingredients} />}
      <Modal></Modal>
    </>
  )
}

export default App;
