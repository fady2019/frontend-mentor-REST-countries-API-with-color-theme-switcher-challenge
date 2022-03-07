import styles from './Header.module.css';

import Container from '../UI/Container';

import regularMoon from '../../assets/moon-regular.svg';
import solidMoon from '../../assets/moon-solid.svg';

const Header = props => {
  return (
    <div className={`${props.className} ${styles.header}`}>
      <Container className={styles['header-content']}>
        <h2 className={styles.h}>Where in the world?</h2>

        <button
          className={styles['mode-toggle-btn']}
          onClick={props.onToggleMode}
        >
          <img
            className={`app-icon ${styles.icon} `}
            src={props.isDarkMode ? solidMoon : regularMoon}
            alt="icon-moon"
          />
          Dark Mode
        </button>
      </Container>
    </div>
  );
};

export default Header;
