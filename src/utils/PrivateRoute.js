import React from 'react'
import { Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth';



function PrivateRoute({ children }) {
  let {user} = useAuth();
  if (!user) {
    return <Navigate to="/login" replace />
  }
  return children
}

export default PrivateRoute
