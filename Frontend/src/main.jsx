import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { Store } from 'src/redux/Store.jsx'
import AppRouter from 'src/routers/AppRouter'
import Loading from 'src/components/Loading'
import axios from 'axios';
import 'src/index.css'

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <Provider store={Store}>
        <AppRouter />
      </Provider>
    </Suspense>
  </React.StrictMode>,
)
