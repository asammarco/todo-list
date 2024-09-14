import { PlusCircle } from "phosphor-react"
import styles from "./AddTask.module.css"
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react"

interface PropsAddTask{
  onAddNewTask: (task: string) => void
}

export function AddTask({onAddNewTask}: PropsAddTask){

  const [newTask, setNewTask] = useState('')

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>){
    event.target.setCustomValidity('')
    setNewTask(event.target.value)
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>){
    event.target.setCustomValidity('Preenchimento obrigatório');
  }

  
  function handleAddNewTask(event: FormEvent){
      event.preventDefault()
      onAddNewTask(newTask)
      setNewTask('')
  }

  const isEmpty = newTask.length == 0

  return (
    <div className={styles.container}>
      <form onSubmit={handleAddNewTask} className={styles.form}>
        
        <input 
          placeholder="Adicione uma nova tarefa" 
          type="text" 
          name="task" 
          id="task"
          value={newTask}
          onInput={handleNewTaskChange}
          onInvalid={handleNewTaskInvalid}
          required
        />
        
        <button 
          type="submit" 
          disabled={isEmpty}  
        >
          <span>Criar</span>
          <span><PlusCircle size={24} /></span>
        </button>
      </form>
    </div>
  )
}