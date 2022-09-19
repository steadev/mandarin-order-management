import { BrowserRouter } from 'react-router-dom';
import styles from './App.module.css';
import SideBar from './components/SideBar/SideBar';
import MainNavigator from './navigations/MainNavigator';

function App() {
  
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <div className={styles.container}>
      {<SideBar />}
      <MainNavigator />
      </div>
    </BrowserRouter>
  );
}

export default App;
