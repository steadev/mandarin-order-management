import { Route, Routes } from 'react-router-dom';
import OrderDetail from '../screens/OrderDetail/OrderDetail';
import OrderList from '../screens/OrderList/OrderList';
import Statistics from '../screens/Statistics/Statistics';

const MainNavigator = () => {
  return (
    <Routes>
      <Route path="/" element={<OrderList />}></Route>
      <Route path="/order/:id" element={<OrderDetail />}></Route>
      <Route path="/stats" element={<Statistics />}></Route>
    </Routes>
  )
}

export default MainNavigator;