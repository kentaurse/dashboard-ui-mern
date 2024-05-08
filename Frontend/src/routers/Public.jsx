import { Navigate, Outlet } from 'react-router-dom'

const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  return !!token;
};

const Public = () => {
  return (
    !isAuthenticated() ? <Outlet/> : <Navigate to='/dashboard'/>
  )
}

export default Public;