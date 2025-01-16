import { useSelector, useDispatch } from "react-redux";
// import { toggleTodo } from "../../redux/actions/todoActions";
import { actions, getInitialStateAsync } from "../../redux/reducers/todoReducer";
import { todoSelector } from "../../redux/reducers/todoReducer";
import styles from "./ToDoList.module.css";
import {useEffect} from "react";
import axios from "axios";

function ToDoList() {

  // To Call API using Async thunc We will do following steps : 
  /*  1. Create Async thunc function
      2. Call API
      3. Set initial state
      4. Call aync thunc from component
  
  */

  const todos=useSelector(todoSelector);
  console.log(todos);
  const disptach = useDispatch();
  // const todos= store.getState().todos;

  useEffect(() => {
    disptach(getInitialStateAsync())
      // fetch("http://localhost:4100/api/todos")
      //   .then(res=>res.json())
      //     .then(parsedJson=>{
      //       console.log(parsedJson);
      //     })
      // axios.get("http://localhost:4100/api/todos")
      //   .then(res=>
      //       {
      //         console.log(res.data);
      //         disptach(actions.setInitialState(res.data));
      //       }
      //     );
  }, []);


  return (
    <div className={styles.container}>
    <ul>
      {todos.map((todo,index) => (
        <li className={styles.item} key={todo.text}>
          <span className={styles.content}>{todo.text}</span>
          <span className={todo.completed ? styles.completed:styles.pending}>{todo.completed ? 'Completed': 'Pending'}</span>
          <button className="btn btn-warning"
          onClick={()=>{
            // console.log("[LOG]: Todo - TOGGLE Action dispatched");
            disptach(actions.toggle(index))}}
          >Toggle</button>
          </li>
      ))}
    </ul>
    </div>
  );
}

export default ToDoList;