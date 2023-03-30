import './footer.css';
import { LIST_TYPES, LIST_TITLE } from '../../config';


const Footer = props => {
  const {tasks} = props
  return (
    <div >
      <footer className="footer">
        <div className="footer_left">
              {Object.values(LIST_TYPES).map(type =>{
                const listCount = tasks.filter(task => task.status === type)
                if (!listCount.length) return null
                return (
                  <div className="countBlock" key={type}>{LIST_TITLE[type]}: {listCount.length}</div>
                )
              })}
        </div>
        <div className="nameUser">Kanban board by Diana, 2023</div>
      </footer>

    </div>
  );
}

export default Footer;
