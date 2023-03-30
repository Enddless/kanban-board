import './header.css';
import avatar from './user-avatar.png';
import arrowDown from './arrow-down.png';
import { useState } from 'react'
import HeaderUser from './header-user'
import List from '../list/list'


function Header(props) {
  const {isLogged} = props

  const [isAreaVisible, setAreaVisible] = useState(false)
  const handleClick = () => {
    setAreaVisible(!isAreaVisible)
    let listBlock = document.getElementsByClassName("list")
        for (let i = 0; i < listBlock.length; i++) {
          listBlock[i].classList.toggle('overlay-block');
        }
    let vector = document.querySelector(".vector")
    vector.classList.toggle('vector-toggle');
  }

  return (
      <header className="header">
        <div className="flex">
          <h1>Awesome Kanban Board</h1>
          <div className="flexbox">
            <div className="circle">
              <img src={avatar} className="avatar" alt="Аватар пользователя"/>

            </div>
            <div className="vector" onClick={handleClick}>
              <img src={arrowDown} className="arrowDown" alt="Аватар пользователя"/>
            </div>
          </div>
        </div>

        {isAreaVisible && (
            <HeaderUser isLogged={isLogged}/>
        )}


        
      </header>
  );
}

export default Header;
