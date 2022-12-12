import React from 'react'



export default function User(props) {

  return (
    <div className='user'>
        
        <div className='card' key={props.id}>
            <img src={props.image} alt={`${props.firstName} ${props.lastName}`}/>
            <h2>{props.firstName} {props.lastName}</h2>
            <button onClick={props.details}>Details User</button>
            <button onClick={props.listeTaches}>List des taches</button>
          </div>
    </div>
  )
}
