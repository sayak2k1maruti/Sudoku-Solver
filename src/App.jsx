import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from './Components/Main';
import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {


  return (
    <div className='max-w-[1080px] p-3'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Main />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div >
  )
}

export default App;
