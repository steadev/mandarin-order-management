import { useState } from 'react'
import SelectBox, { SelectBoxProps } from './SelectBox'
export type OptionValue = {
  id: number
  value: string
}

type OptionSelectBoxProps = Omit<SelectBoxProps<OptionValue>, 'onClick'> & {
  options: OptionValue[]
}

const OptionSelectBox = ({ icon, options, onChange }: OptionSelectBoxProps) => {
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
