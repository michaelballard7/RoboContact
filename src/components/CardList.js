import React from 'react';
import Card from './Card'

const CardList = (props)=>{
  return(
    <div>
      {props.robots.map(robot => <Card key={robot.id} name={robot.name} email={robot.email} id={robot.id}/>)}
    </div>
  )
}

export default CardList;