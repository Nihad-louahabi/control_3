import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';


export default function DetailsCountry() {
  const { id } = useParams()
  
  const { data } = useSelector(state => state.user)
    const selectedUser = data.users.filter(user => user.id == id)
  

  return (
    <div >
        { selectedUser.map(user =>
            <div className='detail'>
                <img src={user.image} alt="" />
                <h2>FirstName: {user.firstName}</h2>
                <h2>LastName: {user.lastName}</h2>
                <h2> Age : {user.age}</h2>
                <h2>gender: {user.gender}</h2>
                <h2>Email: {user.email}</h2>
                <h2> phone : {user.phone}</h2>
                <h2> poids : {user.weight}</h2>
                <h2>hauteur: {user.height}</h2>
                <h2>date naissance: {user.birthDate}</h2>
                <h2> groupe sanguin  : {user.bloodGroup}</h2>
                <h2> la couleur de l'œil   : {user.eyeColor}</h2>
                
                
            </div>)
        }
    </div>
  )
}
