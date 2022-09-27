import { faCalendar, faTag } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import 'react-calendar/dist/Calendar.css'
import DateSelectBox from '../SelectBox/DateSelectBox'
import OptionSelectBox, { OptionValue } from '../SelectBox/OptionSelectBox'
import styles from './SearchBar.module.css'

const SearchBar = () => {
  const [dateRange, setDateRange] = useState<Date[]>([])
  const statusOptions = [
    { id: 1, value: '결제완료' },
    { id: 2, value: '배송완료' },
    { id: 3, value: '미결제' },
  ]

  const onChangeDateRange = (value: Date[]) => {
    setDateRange(value)
  }

  const onChangeStatus = (value: OptionValue) => {
    console.log(value)
  }

  return (
    <div className={styles.container}>
      <input></input>
      <DateSelectBox icon={faCalendar} onChange={onChangeDateRange} />
      <OptionSelectBox
        icon={faTag}
        options={statusOptions}
        onChange={onChangeStatus}
      />
    </div>
  )
}

export default SearchBar
