import './main.css';

import { Routes, Route } from 'react-router-dom'
import Board from '../board/board'
import ListDetail from '../list-detail/list-detail'

// в зависимости от адреса URL будет происходить маршрутизация
//и соответственно будет подгружаться тот или иной компонент
//switch компонент переименован в 6 версии на Routes
const Main = (props) => {
  return (
      <main className="main">
        <Routes>
          <Route exact path={'/'} element={ <Board {...props}/> } />
          <Route path={'/tasks/:taskId'} element={ <ListDetail {...props}/> } />
        </Routes>    
      </main>
  );
}
export default Main;
