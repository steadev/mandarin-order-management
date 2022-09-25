import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import 'react-calendar/dist/Calendar.css'
import DateSelectBox from '../SelectBox/DateSelectBox'
import styles from './SearchBar.module.css'

const SearchBar = () => {
  const [dateRange, setDateRange] = useState<Date[]>([])

  const onChangeDateRange = (value: Date[]) => {
    setDateRange(value)
  }

  return (
    <div className={styles.container}>
      <input></input>
      <DateSelectBox icon={faCalendar} onChange={onChangeDateRange} />
      {/* <OptionSelectBox icon={faCalendar} options={[]} onChange={} /> */}
    </div>
  )
}

export default SearchBar
