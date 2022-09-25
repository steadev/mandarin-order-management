import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PropsWithChildren } from 'react'
import styles from './SelectBox.module.css'

export type SelectBoxProps<T> = {
  icon: IconDefinition
  onChange: (value: T) => void
  onClick: () => void
}

const SelectBox = ({
  icon,
  onChange,
  onClick,
  children,
}: PropsWithChildren<SelectBoxProps<any>>) => {
  return (
    <div className={styles.container} onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
      {children}
      <FontAwesomeIcon icon={faAngleDown} className={styles.arrow} />
    </div>
  )
}

export default SelectBox
