import { useState } from 'react'
import Calendar from 'react-calendar'
import SelectBox, { SelectBoxProps } from './SelectBox'

type DateSelectBoxProps = Omit<SelectBoxProps<Date[]>, 'onClick'>

const DateSelectBox = ({ icon, onChange }: DateSelectBoxProps) => {
  const [toggle, setToggle] = useState<boolean>(false)

  const onChagneDateRange = (dateRange: Date[]) => {
    onChange(dateRange)
  }
  return (
    <SelectBox
      icon={icon}
      onChange={onChange}
      onClick={() => setToggle(!toggle)}
    >
      {toggle && <Calendar onChange={onChagneDateRange} selectRange={true} />}
    </SelectBox>
  )
}

export default DateSelectBox
