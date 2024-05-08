import React, { useEffect, useState } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, redirect } from "react-router-dom";
// import { themeChange } from 'theme-change';
import App from 'src/App';
import Error from 'src/components/Error';
import LoginPage from 'src/pages/LoginPage';
import RegisterPage from 'src/pages/RegisterPage';
import AboutPage from 'src/pages/AboutPage';
import WorkspacePage from 'src/pages/WorkspacePage';
import Public from 'src/routers/Public';
import Private from 'src/routers/Private';
import { ConfigProvider } from 'antd';


const AppRouter = () => {
  const [antTheme, setAntTheme] = useState({})
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light')
  );
  
  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
    // themeChange(false);

    if(theme == 'dark') {
      setAntTheme({
        // algorithm: theme.darkAlgorithm,
        token: { colorPrimary: '#202836' }
      })
    }else {
      setAntTheme({
        token: { colorPrimary: '#ffffff' }
      })
    }
  }, [theme]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<App onChangeTheme={setTheme}/>} errorElement={<Error />}>
          <Route element={<Private />}>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/workspace" element={<WorkspacePage />} />
          </Route>
        </Route>
        <Route element={<Public />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
        <Route path="*" loader={() => redirect('/about')} />
      </>
    )
  );

  return (
    // <ConfigProvider theme={antTheme}>
      <RouterProvider router={router} />
    // </ConfigProvider>
  );
}

export default AppRouter;
