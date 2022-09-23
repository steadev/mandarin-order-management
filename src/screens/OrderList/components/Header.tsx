import {
  faFileExport,
  faFileImport,
  faPlus,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Header.module.css'
const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>주문 목록</div>
      <div className={styles.buttonListWrapper}>
        <button className={styles.button}>
          <FontAwesomeIcon className={styles.icon} icon={faFileImport} />
          불러오기
        </button>
        <button className={styles.button}>
          <FontAwesomeIcon className={styles.icon} icon={faFileExport} />
          내보내기
        </button>
        <button className={styles.addButton}>
          <FontAwesomeIcon className={styles.icon} icon={faPlus} />
          주문 생성
        </button>
      </div>
    </div>
  )
}

export default Header
