
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { isLogin } from '../utils';

function PrivateRoute({ children }) {
    const auth = isLogin();
    return auth ? children : <Navigate to="/signin" />;
  }

  export default PrivateRoute

  export function ProtectRoute({ children }) {
    const auth = isLogin();
    return auth ? children : <Navigate to="/dashboard" />;
  }
