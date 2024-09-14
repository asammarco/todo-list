import styles from './TaskList.module.css'
import { Task,TaskProps } from './Task'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { AddTask } from './AddTask'


export function TaskList(){


  const [taskList, setTaskList] = useState<TaskProps[]>([
    {
      id: uuidv4(),
      content: 'Estudar React, rever Hooks',
      isChecked: false,
    },{
      id: uuidv4(),
      content: 'Estudar css, rever ::before',
      isChecked: false,
    },{
      id: uuidv4(),
      content: 'Leitura do livro Stevie Jobs',
      isChecked: true,
    },
    {
      id: uuidv4(),
      content: 'Treino A academia',
      isChecked: true,
    },
  ])

  const [totalTarefasCriadas, setTotalTarefasCriadas] = useState(taskList.length)
  const [totalTarefasConcluidas, setTotalTarefasConcluidas] = useState(countTotalTarefasConcluidas())
  
  function onDeleteTask(id: string){
    const newTasks = taskList.filter((task) => {
      if (task.id != id){
        return task.id
      }
      else{
        if(task.isChecked){
          setTotalTarefasConcluidas(state => state - 1)
        }
      }
    })
    setTotalTarefasCriadas(state => state - 1)
    setTaskList(newTasks)
    
  }

  function onChecked(id: string){
    const newTask = taskList.map((task) => {
      if(task.id == id){
        task.isChecked = !task.isChecked
      }
      return task
    })
    setTaskList(newTask)
    setTotalTarefasConcluidas((state) => state + 1)
  }

  function countTotalTarefasConcluidas(){
    const result = taskList.reduce((a, t) => {
      if(t.isChecked){
       return a + 1 
      }
      return a
    }
    ,0)
    return result
  }

  function onAddNewTask(content: string){
    const newTask = {id: uuidv4(), content: content, isChecked: false}
    setTaskList([...taskList, newTask])
    setTotalTarefasCriadas((state) => state+1)
  }
  return (
    <div className={styles.container}>
      <div className={styles.addTask}>
      <AddTask onAddNewTask={onAddNewTask}/>
      </div>
      <header className={styles.header}>
        <div className={styles.createdTasks}>
          <strong>Tarefas criadas</strong>
          <span>{totalTarefasCriadas}</span>
        </div>

        <div className={styles.completedTasks}>
          <strong>Tarefas concluídas</strong>
          <span>{totalTarefasConcluidas} de {totalTarefasCriadas}</span>
        </div>
        
      </header>
      <li className={styles.tasks}>
        {
          
          taskList.map(ts =>
            <Task key={ts.id} props={ts} onDeleteTask={onDeleteTask} onChecked={onChecked}/>
          )
        }        
      </li>
    </div>
  )
}