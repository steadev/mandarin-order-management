import { useState } from 'react'
import SelectBox, { SelectBoxProps } from './SelectBox'

type OptionSelectBoxProps = Omit<SelectBoxProps<number>, 'onClick'> & {
  options: {
    id: number
    value: string
  }
}

const OptionSelectBox = ({ icon, onChange }: OptionSelectBoxProps) => {
  const [toggle, setToggle] = useState<boolean>(false)

  return (
    <SelectBox
      icon={icon}
      onChange={onChange}
      onClick={() => setToggle(!toggle)}
    >
      {/* {toggle && (
        
      )} */}
    </SelectBox>
  )
}

export default OptionSelectBox
