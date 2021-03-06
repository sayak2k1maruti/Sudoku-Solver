import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from './Components/Main';
import Footer from './Components/Footer';
import Header from './Components/Header';
import PrivacyPolicy from './Components/PrivacyPolicy';

function App() {


  return (
    <div className=' sm:p-3 w-min-screen bg-neutral-200 flex flex-col flex-nowrap items-center justify-center '>
      <Router>
        <Header />
        <Routes>
          <Route path='/Sudoku-Solver/' element={<Main />}></Route>
          <Route path='/Sudoku-Solver/privacypolicy' element={<PrivacyPolicy />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div >
  )
}

export default App;
