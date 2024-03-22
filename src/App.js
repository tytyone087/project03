import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} /> 
      </Routes>
      
      
      <Footer />
    </div>
  );
}

export default App;
