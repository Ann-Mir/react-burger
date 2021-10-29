import React from 'react';
import {useSelector} from 'react-redux';
import {AppRoutes} from '../../utils/constants';
import {Route, Redirect, RouteProps} from 'react-router-dom';


export function ProtectedRoute({ children, ...rest }: RouteProps) {

  const {isAuthenticated} = useSelector((state: any) => state.user);

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
