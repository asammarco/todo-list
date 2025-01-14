import styles from './App.module.css'
import { Header } from './components/Header'
import { TaskList } from './components/TaskList'

import './global.css'

export function App() {

  return (
    <>
      <Header />
      <main className={styles.container}>
         <TaskList />   
      </main>
      </>
  )

}


