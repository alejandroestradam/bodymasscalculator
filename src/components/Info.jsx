import React from 'react';

const Info = (props) => {
  return (
    <div className='calculator'>
        <h1>Results</h1>
        <p>Height: <span>{props.height} kg</span></p>
        <p>Weight: <span>{props.weight} m</span></p>
        <p className='bmi'>You BMI is <span>{props.bodymass}</span>, so you are in the <span>{props.grade}</span> category for adults with your same height</p>
        <button className='btn' onClick={()=>{window.location.reload(true)}}>Do another calculation</button>
    </div>
  )
}

export default Info;