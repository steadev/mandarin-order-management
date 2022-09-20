import {
  faChartBar,
  faHomeAlt,
  faRedoAlt,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './SideBar.module.css'
const SideBar = () => {
  const menus: {
    icon: IconDefinition
    path: string
  }[] = [
    {
      icon: faHomeAlt,
      path: '',
    },
    {
      icon: faChartBar,
      path: 'stats',
    },
  ]

  return (
    <div className={styles.container}>
      <div className={styles.relaod}>
        <FontAwesomeIcon icon={faRedoAlt} />
      </div>
      <div className={styles.menu}>
        {menus.map((menu) => (
          <FontAwesomeIcon icon={menu.icon} />
        ))}
      </div>
    </div>
  )
}

export default SideBar
