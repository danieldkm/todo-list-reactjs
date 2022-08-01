import { Trash } from 'phosphor-react';

import { ITask } from './Task';

import styles from './TaskItem.module.css';

interface TaskItemProps {
  task: ITask;
  onCheck: () => void;
  onDelete: () => void;
}

export function TaskItem({ task, onCheck, onDelete }: TaskItemProps) {
  return (
    <div className={styles.container}>
      <div className={styles.round}>
        <input
          type='checkbox'
          id={task.id}
          checked={task.checked}
          onChange={() => onCheck(task)}
        />
        <label htmlFor={task.id} />
        <div className={styles.content}>{task.content}</div>
      </div>
      <div className={styles.exclude}>
        <button onClick={() => onDelete(task)} title='Deletar comentário'>
          <Trash size={24} />
        </button>
      </div>
    </div>
  );
}
