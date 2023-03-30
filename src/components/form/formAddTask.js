import './formAddTask.css';
import {useState} from 'react'


const FormAddTask = props => {
    const {addTasks, setFormVisible} = props
    const [values, setValues] = useState({
        title:"",
        description:"",
    })
    const handleChange = (e) => {
        //записываем сюда имя элемента или инпута или техтареа соотвт
        const fieldName = e.target.name
        setValues({...values, [fieldName]: e.target.value}) 
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (values.title){
            addTasks(values.title, values.description) 
            //после отправки формы очищаем поля и скрываем форму
            
        }
        
        //TODO обработать внешний вид на случай, если не заполнено поле


        setFormVisible(false)
    }

  return (
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="inputAdd"
          id="taskTitle"
          name="title"
          type="text"
          placeholder="Введите название задачи"
          value={values.title}
          onChange={handleChange}
        />
        <textarea
          className="textareaAdd"
          id="taskDescription"
          name="description"
          placeholder="Укажите описание задачи"
          value={values.description}
          onChange={handleChange}
        />
        <button className="btn-submit" type="submit">Push task</button>

      </form>
  );
}

export default FormAddTask;
