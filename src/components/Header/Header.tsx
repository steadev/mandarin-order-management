import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {

  return (
    <nav className={styles.container}>
      <Link to="/" className={styles.menu}>주문목록</Link>
      <Link to="/stats" className={styles.menu}>통계</Link>
    </nav>
  )
}

export default Header;