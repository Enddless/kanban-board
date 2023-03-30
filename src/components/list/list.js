import './list.css';
//import Button from '../button/button'
import { LIST_TYPES } from '../../config'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import FormAddTask from '../form/formAddTask';


const List = props => {
  const {title, type, tasks, addTasks} = props
  //пропсы используемые только здесь, это только те, которые касаются конкретного таскса, 
  //стэйт отвечает за видимость формы, по умолчанию не видна
  //условный рендеринг ниже, кнопка добавить задачу появляется только в бэклоге
  //появление формочки для добавления новой задачи в бэклоге должна появляться при нажатии на кнопку 
  
  const [isFormVisible, setFormVisible] = useState(false)
 
  
  const viewForm = ()=> {
    setFormVisible(!isFormVisible)
  }
  
  return (
    <div className="list" id="list">
          <div>
            <h2>{title}</h2>
          </div>
          <div className="list-scroll" >
            {tasks.map(task =>{
                return (
                  <Link to={`/tasks/${task.id}`} className="noLink">
                    <div className="list__item" key={task.id}>{task.title}</div>
                  </Link>  
                )
            })}

          
          
          
          {type === LIST_TYPES.backlog && (
            <button className="button-add" onClick={viewForm}>+ Add card</button>
          )}

          {type === LIST_TYPES.backlog && isFormVisible && (
            <FormAddTask addTasks={addTasks} setFormVisible={setFormVisible}/>
          )}
          </div>
       
    </div>
  )
}
export default List