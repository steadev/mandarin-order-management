import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import 'react-calendar/dist/Calendar.css'
import SelectBox from '../SelectBox/SelectBox'
import styles from './SearchBar.module.css'

const SearchBar = () => {
  const [dateRange, setDateRange] = useState<Date[]>([])

  const onChagneDateRange = (value: Date[]) => {
    setDateRange(value)
  }

  return (
    <div className={styles.container}>
      <input></input>
      <SelectBox icon={faCalendar} type='date' onChange={onChagneDateRange} />
    </div>
  )
}

export default SearchBar
