import { Outlet } from "react-router-dom";
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import 'src/assets/styles/App.css'

function App({ onChangeTheme }) {

  return (
    <div className="App">
      <Header onChangeTheme={onChangeTheme}/>
      {/* <main><Outlet /></main> */}
      {/* <Footer /> */}
    </div>
  )
}

export default App
