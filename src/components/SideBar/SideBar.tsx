import {
  faChartBar,
  faHomeAlt,
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
      <div className={styles.storeName}>
        범수네
        <br />
        농장
      </div>
      <div className={styles.menuContainer}>
        {menus.map((menu) => (
          <div className={styles.menu}>
            <FontAwesomeIcon icon={menu.icon} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SideBar
