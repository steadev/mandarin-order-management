import Header from './components/Header'
import OrderTable from './components/OrderTable'
import SearchBar from './components/SearchBar'
import SortingTab from './components/SortingTab'
import styles from './OrderList.module.css'

const OrderList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <Header />
        <SearchBar />
        <SortingTab />
      </div>
      <OrderTable />
    </div>
  )
}

export default OrderList
