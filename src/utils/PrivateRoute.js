import React from 'react'
import { Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth';


function PrivateRoute({ children, allowedRoles }) {
  let {user} = useAuth();
  
  if (!user) {
    return <Navigate to="/login" replace />
  }
  else {
    if (user.role !== allowedRoles) {
      return <Navigate to="/unauthorized" replace />
    }
  }

  return children
}

export default PrivateRoute
