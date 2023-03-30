import './board.css';
import {LIST_TYPES, LIST_TITLE} from '../../config'
import List from '../list/list'
import uniqid from 'uniqid'
import {useState} from 'react'



const Board = props => {
  const {tasks, setTasks} = props

  //добавляем функцию добавления новой задачи сюда к родителю, 
  //т.к. у лист нет доступа ко всем тасксам
  //в переменную newTask записывается по полям то, что приходит из формы
  

  const addTasks = (title, description) => {
    const newTask = {
      id: uniqid(),
      title: title,
      description: description,
      created: new Date().toISOString(),
      status: LIST_TYPES.backlog
    }
    setTasks([...tasks, newTask])
  }

  return (
    <>
      {Object.values(LIST_TYPES).map(type => {
        //просто возвращает новый массив из стандартного мок,
        //то есть полный список задач в разнобой по статусам превращается в 
        //отсортированный массив задач по статусу
        const listTasks = tasks.filter(task => task.status === type)
        //console.log({listTasks});
        return (
            <List 
                key={type} 
                type={type} 
                title={LIST_TITLE[type]} 
                tasks={listTasks} 
                addTasks={addTasks}
            />
        )
      })}
    </>
  );
}
export default Board