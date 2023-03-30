import './list-detail.css'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect  } from 'react'

import { LIST_TYPES, LIST_TITLE } from '../../config'


const ListDetail = (props) => {
    const params = useParams()
    const {taskId} = params
    const {tasks, setTasks} = props

    //теперь тут хранится вся информация о задаче, id которой соответствует url открытой задачи
    const task = tasks.find(task => task.id === taskId)
  
    const handleChange = (e) => {
      const updatedTask = tasks.map(task => {
        if (task.id === taskId) {
          return {...task, status: e.target.value}
        }
        return task
      })
      setTasks(updatedTask)
    }

    //формирую стейт для возможности редактирования description в детальном листе
    const [isEdit, setIsEdit] = useState(false);
    const valueDescription = task.description || []; 
    //window.localStorage.getItem('description') || []
    //он получает длинный текст console.log(valueDescription)
    const [value, setValue] = useState(valueDescription);
    let elem;

    if (!isEdit) {
      // статус ожидания, то есть просто показ
      elem = <span  
        onClick={() => setIsEdit(true)}> 
        {value || 'This task has no description'}
      </span>
    } else {
      //статус редактирования:это новое значение
      elem = 
          <textarea
            className="editInputDetail" 
            value={value}
            onChange={event => setValue(event.target.value)}
            onBlur={() => setIsEdit(false)}
          />
    task.description = value
    console.log('В конечном итоге после редактирования элемента - ', task.description)
    }

    useEffect( () => {
      window.localStorage.setItem('description', value)
    }, [value]) 
  

  return ( 
    <div className="list-details">
      {task ? (
        <>
          <div className="list-details__header">
              <h2 className="list-details__title">{task.title}</h2>
              <div title="Close">
                <Link to='/'>
                    <div className="list-details__divider list-details__divider_left"></div>
                    <div className="list-details__divider list-details__divider_right"></div>
                </Link>   
              </div>
          </div>
          {/*123*/}
          <div className="list-details__desription">  {elem}  </div>
          {/*123*/}
          <p> Изменить статус задачи:</p>
          <select className="select" value={task.status} onChange={handleChange}>
            {Object.values(LIST_TYPES).map(type =>{
              return (
                <option key={type} value={type}>{LIST_TITLE[type]}</option>
              )
            })}
          </select>
        </>
      ) : (
        <>
          <div className="list-details__header">
            <h2>Task with ID: {taskId} not found</h2>
            <div title="Close">
                    <Link to='/'>
                        <div className="list-details__divider list-details__divider_left"></div>
                        <div className="list-details__divider list-details__divider_right"></div>
                    </Link>   
            </div>
          </div>
        </>

      )}
    </div>
  )
}
export default ListDetail