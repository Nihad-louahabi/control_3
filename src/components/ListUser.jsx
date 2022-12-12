import { useNavigate, } from "react-router-dom";
import React ,{useState} from "react";
import { useSelector } from 'react-redux';
import Acceuil from "./Acceuil";
import User from "./User"
function ListUser ()  { 
  
  const navigate = useNavigate();
  
  const { user } = useSelector(state => state.user)
 
  return (
    <div>
      <h1>Liste des Utilisateurs : </h1>

      <div className="list">
      {user.length != 0 && user.users.map(user =>
       <User key={user.id} image={user.image} nom={`${user.firstName} ${user.lastName}`} 
       details={e => navigate(`/DetailUser/${user.id}`)}
        listeTaches={e => navigate(`/ListeToDo/${user.id}`)} />)}
 

        
    
      </div>
    </div>
  );
    };
export default ListUser;