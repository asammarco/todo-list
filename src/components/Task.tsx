import styles from './Task.module.css'
import {Check, Trash} from 'phosphor-react'

export interface TaskProps{
  id: string;
  content: string;
  isChecked: boolean;
}

export interface Props{
  props: TaskProps;
  onDeleteTask: (id: string) => void;
  onChecked: (id: string) => void;
}

export function Task({props, onDeleteTask, onChecked}: Props){


  function handleOnDeleteTask(){
    onDeleteTask(props.id)
  }

  function hadleOnChecked(){
    onChecked(props.id)
  }

  return (
    <ul className={styles.task}>
          {props.isChecked &&
            <div className={styles.checked}>
              <span><button onClick={hadleOnChecked}><Check size={12} weight="fill"/></button></span>
              <p>{props.content}</p>
            </div>
          }
          {!props.isChecked &&
            <div className={styles.unchecked}>
              <span><button onClick={hadleOnChecked}></button></span>
              <p>{props.content}</p>
            </div>
          }
          <button onClick={handleOnDeleteTask} className={styles.trash}>
            <Trash />
          </button>
        </ul>
  )
}