import { useState, useEffect } from 'react'
import response from './user-config'


import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/header/header'
import Main from './components/main/main'
import Footer from './components/footer/footer'

function App() {
  const isLogged = response.activeUserId !== null

  // в tasks по умолчанию будет храниться массив с данными из заглушки мок, в setTasks функция изменения состояния у задачек таскс
  // чтобы эти данные были доступны в дочерних компонентах, их нужно передать в main

  const initialState = JSON.parse(window.localStorage.getItem('tasks')) || []
  const [tasks, setTasks] = useState(initialState); // вместо начальных значений из мок теперь считываем данные из localstorage

  useEffect( () => {
    window.localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  return (
    <BrowserRouter>
      <div className="App">
        <Header isLogged={isLogged}/>
        <Main tasks={tasks} setTasks={setTasks} />
        <Footer tasks={tasks}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
