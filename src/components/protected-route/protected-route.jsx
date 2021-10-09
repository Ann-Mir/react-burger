import React from 'react';
import {useSelector} from 'react-redux';
import {AppRoutes} from '../../utils/constants';
import { Route, Redirect, useLocation } from 'react-router-dom';

export function ProtectedRoute({ children, ...rest }) {

  const isAuthenticated = useSelector(state => state.user.isAuthenticated);
  const {location} = useLocation();

  // let { getUser, ...auth } = useAuth();
  // const [isUserLoaded, setUserLoaded] = useState(false);
  //
  // const init = async () => {
  //   await getUser();
  //   setUserLoaded(true);
  // };
  //
  // useEffect(() => {
  //   init();
  // }, []);
  //
  // if (!isUserLoaded) {
  //   return null;
  // }

  return (
    <Route
      {...rest}
      // Получим текущий маршрут, с которого произойдёт переадресация
      // для неавторизованного пользователя
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            // Передадим в пропс to не строку, а объект.
            to={{
              // Маршрут, на который произойдёт переадресация
              pathname: AppRoutes.LOGIN,
              // В from сохраним текущий маршрут
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}


export default ProtectedRoute;
