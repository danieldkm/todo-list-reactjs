import {
  useState,
  useEffect,
  FormEvent,
  ChangeEvent,
  InvalidEvent,
} from 'react';
import { PlusCircle } from 'phosphor-react';

import { TaskItem } from './TaskItem';

import styles from './Task.module.css';

export interface ITask {
  id: string;
  checked: boolean;
  content: string;
}

const dataTasks = [
  {
    id: window.crypto.randomUUID(),
    checked: true,
    content:
      'teste awkhbd;kaw hk;ah f;awef;uio ahs;kdfh ;askhv ;asbnv ;asnv;owv ',
  },
  {
    id: window.crypto.randomUUID(),
    checked: true,
    content:
      'teste awkhbd;kaw hk;ah f;awef;uio ahs;kdfh ;askhv ;asbnv ;asnv;owv ',
  },
  {
    id: window.crypto.randomUUID(),
    checked: true,
    content:
      'teste awkhbd;kaw hk;ah f;awef;uio ahs;kdfh ;askhv ;asbnv ;asnv;owv ',
  },
  {
    id: window.crypto.randomUUID(),
    checked: false,
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

export function Task() {
  const [tasks, setTasks] = useState<ITask[]>(dataTasks);
  const [contentTask, setContentTask] = useState('');

  function handleChangeCheckbox(taskToChange: ITask) {
    const changedTasks = tasks.map((task) => {
      if (task.id === taskToChange.id) {
        task.checked = !task.checked;
        return { ...task };
      }
      return task;
    });
    setTasks(changedTasks);
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    const newTask = {
      id: window.crypto.randomUUID(),
      checked: false,
      content: contentTask,
    };
    setTasks([...tasks, newTask]);
    setContentTask('');
  }

  function handleContentTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');

    setContentTask(event.target.value);
  }

  function handleContentTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!');
  }

  function handleDeleteTask(taskToDelete: ITask) {
    setTasks(tasks.filter(task => task.id !== taskToDelete.id));
  }

  const totalTasks = tasks.length;
  const tasksCompleted = tasks.filter((task) => task.checked).length;

  return (
    <article>
      <section className={styles.newTask}>
        <form onSubmit={handleCreateNewTask}>
          <input
            type='text'
            placeholder='Adicione uma nova tarefa'
            value={contentTask}
            onChange={handleContentTaskChange}
            onInvalid={handleContentTaskInvalid}
            required
          />
          <button type='submit'>
            Criar
            <PlusCircle />
          </button>
        </form>
      </section>
      <section className={styles.taskHeader}>
        <header>
          <div className={styles.taskCreated}>
            Tarefas criadas <span>{totalTasks}</span>
          </div>
          <div className={styles.taskCompleted}>
            Concluídas{' '}
            <span>
              {tasksCompleted} de {totalTasks}
            </span>
          </div>
        </header>
      </section>
      <section className={styles.task}>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onCheck={handleChangeCheckbox}
            onDelete={handleDeleteTask}
          />
        ))}
      </section>
    </article>
  );
}
