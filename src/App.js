import logo from './logo.svg';
import './App.css';
import { Routes, Route, Outlet } from "react-router-dom";
import PrizesPage from './PrizesPage';
import PaymentPage from './PaymentPage';

function App() {
  return (
    <Routes>
      <Route path="/prize_page" element={<PrizesPage />} />
      <Route path="/" element={<PaymentPage/>} />
    </Routes> 
  );
}

export default App;
