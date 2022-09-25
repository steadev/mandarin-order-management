import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import Calendar from 'react-calendar'
import styles from './SelectBox.module.css'

type SelectBoxProps<T> = {
  icon: IconDefinition
  type: 'date' | 'select'
  options?: string[]
  onChange: (value: T) => void
}

const SelectBox = ({
  icon,
  type,
  options,
  onChange,
}: SelectBoxProps<Date[] | string>) => {
  const [toggle, setToggle] = useState(false)
  const onChagneDateRange = (dateRange: Date[]) => {
    onChange(dateRange)
  }

  return (
    <div className={styles.container} onClick={() => setToggle(!toggle)}>
      <FontAwesomeIcon icon={icon} />
      {toggle && type === 'date' && (
        <Calendar onChange={onChagneDateRange} selectRange={true} />
      )}
      <FontAwesomeIcon icon={faAngleDown} className={styles.arrow} />
    </div>
  )
}

export default SelectBox
