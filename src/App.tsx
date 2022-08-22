import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import OrderDetail from './screens/OrderDetail';
import Statistics from './screens/Statistics';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/order/*" element={<OrderDetail />}></Route>
        <Route path="/stats" element={<Statistics />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
