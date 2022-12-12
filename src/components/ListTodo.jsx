import React ,{useState} from "react";
import {AiOutlineCheck,AiOutlineClose} from "react-icons/ai";

export default function ListTodo(){
    const { id } = useParams()
    const userListe = useSelector(state => state.user.user)
    const todoListe = useSelector(state => state.todo.data)
    const selectedUser = userListe.users.filter(user => user.id == id)
    const selectedToDos = todoListe.todos.filter(todo => todo.id == id)



    return(
        <div className="listTD">
        
        <table >
            <thead>
                <tr>
                    <td> Todos</td>
                    <td> Completed</td>
                </tr>
            </thead>
            <tbody>
            {selectedToDos.map(todo => <tr key={todo.id}>
                
                    <td>{todo.todo}</td>
                    <td>{todo.completed === true ? <AiOutlineCheck  /> : <AiOutlineClose/>}
                      
                    </td>
                </tr>)}

            </tbody>
        </table>
        
        </div>

    )
}





















