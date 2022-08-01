import { Header } from './components/Header';
import { Task } from './components/Task';

import styles from './App.module.css';

import './global.css';

function App() {
  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <Task />
      </main>
    </>
  );
}

export default App;
