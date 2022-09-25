import Header from './components/Header/Header'
import OrderTable from './components/OrderTable/OrderTable'
import SearchBar from './components/SearchBar/SearchBar'
import SortingTab from './components/SortingTab/SortingTab'
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
