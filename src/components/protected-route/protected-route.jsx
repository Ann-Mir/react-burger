import React from 'react';
import {useSelector} from 'react-redux';
import {AppRoutes} from '../../utils/constants';
import { Route, Redirect } from 'react-router-dom';

export function ProtectedRoute({ children, ...rest }) {

  const {isAuthenticated} = useSelector(state => state.user);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: AppRoutes.LOGIN,
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}


export default ProtectedRoute;
