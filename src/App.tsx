import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import MainNavigator from './navigations/MainNavigator';

function App() {
  
  return (
    <BrowserRouter>
      <Header />
      <MainNavigator />
    </BrowserRouter>
  );
}

export default App;
