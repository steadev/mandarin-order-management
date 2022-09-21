import Header from './components/Header'
import OrderTable from './components/OrderTable'
import SearchBar from './components/SearchBar'
import SortingTab from './components/SortingTab'

const OrderList = () => {
  return (
    <div>
      <Header />
      <SearchBar />
      <SortingTab />
      <OrderTable />
    </div>
  )
}

export default OrderList
