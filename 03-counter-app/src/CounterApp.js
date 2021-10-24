import { useState } from "react";
import PropTypes from "prop-types";


const CounterApp = ({numero = 10}) => {
  
  const [ counter, sumCounter] = useState(numero); 

  //handleAddedEvent
  const handleAdded = (e) => {
    //  sumCounter(counter + 1);
    sumCounter( (c) => {return c+1});
  };
  const restar = () => {
    sumCounter( (c) => c-1 );
  };
  const reset = () => {
    sumCounter( (c) => numero );
  };
  
  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={handleAdded}>+1</button>
      <button onClick={reset}>Reset</button>
      <button onClick={restar}>-1</button>

    </>
  );
};

CounterApp.propTypes = {
  numero: PropTypes.number
};


export default CounterApp;
