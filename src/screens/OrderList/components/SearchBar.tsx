import { useState } from 'react'
import Calendar from 'react-calendar'
import styles from './SearchBar.module.css'

const SearchBar = () => {
  const [dateRange, setDateRange] = useState<Date[]>([])

  const onChagneDateRange = (value: Date[]) => {
    setDateRange(value)
  }

  return (
    <div className={styles.container}>
      <input></input>
      <select></select>
      <Calendar onChange={onChagneDateRange} selectRange={true} />
    </div>
  )
}

export default SearchBar
