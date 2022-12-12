import React  from 'react'
import { useSelector } from 'react-redux'
import ListUser from './ListUser';
import ListTodo from './ListTodo';
import DetailUser from "./DetailUser"
import { Outlet} from "react-router-dom";
import { Routes, Route } from 'react-router-dom'



export default function Acceuil() {

    const user = useSelector(state => state.user.user);



  return (
    <div className='acceuil'>
        <div className='header'>
        <h2>Gestion des Taches</h2>
    </div>
    <Routes>
        <Route exact path="/" element={<ListUser />} />
        <Route path='/DetailUser/:id' element={<DetailUser />} />
        <Route path='/ListeToDo/:id' element={<ListTodo/>} />
    </Routes>
    </div>
  )
}
