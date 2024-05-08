import { Navigate, Outlet } from 'react-router-dom'

const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  return !!token;
};

const Private = () => {
  return (
    isAuthenticated() ? <Outlet/> : <Navigate to='/login'/>
  )
}

export default Private;