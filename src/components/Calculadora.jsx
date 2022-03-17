import React from 'react';
import '../css/calculadora.css';
import { grades } from '../helpers/constants';
import Info from './Info';

const Calculadora = () => {
    const [result, setResult] = React.useState('');
    const [weight, setWeight] = React.useState('');
    const [height, setHeight] = React.useState('');
    const [grade, setGrade] = React.useState('');
    const [flag, setFlag] = React.useState(true);


    function calculateMass(){
        if(!weight || !height){
            alert('Enter valid values');
            window.location.reload(true);
        }
        setResult((weight / (height * height)).toFixed(2));
        if(typeof result !== 'string'){
            alert('Enter valid values');
            window.location.reload(true);
        }
        console.log(typeof weight, typeof height);
        setFlag(false);
    }
    function calculateGrade(){
        if(result<16 && result > 0){
            setGrade(grades[0]);
        }
        if(result >= 16 && result < 17){
            setGrade(grades[1]);
        }
        if(result >= 17 && result < 18.5){
            setGrade(grades[2]);
        }
        if(result >= 18.5 && result < 25){
            setGrade(grades[3]);
        }
        if(result >= 25 && result < 30){
            setGrade(grades[4]);
        }
        if(result >= 30 && result < 35){
            setGrade(grades[5]);
        }
        if(result >= 35 && result < 40){
            setGrade(grades[6]);
        }
        if(result >= 40){
            setGrade(grades[7]);
        }
    }

    React.useEffect(()=>{
        calculateGrade();
    },[result]);

  return (
    <div className='container'>
        {flag
        ?
        <div className='calculator'>
        <h1 className='title'>Body Mass Index Calculator</h1>
        <p>Enter your weight and height:</p>
        <div className="data">
            <input className='input' type="number" placeholder='Enter you weight in Kg' value={weight} onChange={(e)=>{setWeight(e.target.value)}}/>
            <input className='input' type="number" placeholder='Enter your height in M'value={height} onChange={(e)=>{setHeight(e.target.value)}}/>
        </div>
        <button type='submit' className='btn' onClick={calculateMass}>Calculate</button>
        </div>
        :      
        <Info weight={weight} height={height} bodymass={result} grade={grade}/>
        }
        {/*<p>Resultado: {result} {grade}</p>*/}
    </div>
  )
}

export default Calculadora