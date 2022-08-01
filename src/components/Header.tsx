import styles from './Header.module.css';

import igniteLogo from '../assets/todo-list-logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt='Logotipo do Ignite' />
    </header>
  );
}
