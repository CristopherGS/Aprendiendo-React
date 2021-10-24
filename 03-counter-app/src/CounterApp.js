import { useState } from "react";
import PropTypes from "prop-types";


const CounterApp = ({numero}) => {
  
  const [ counter, sumCounter] = useState(0);
  
  
  //handleAddedEvent
  const handleAdded = (e) => {
    //  sumCounter(counter + 1);
    sumCounter( (c) => c+1);
  };
  
  
  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={handleAdded}>Contador</button>
    </>
  );
};

CounterApp.propTypes = {
  numero: PropTypes.number
};

export default CounterApp;
