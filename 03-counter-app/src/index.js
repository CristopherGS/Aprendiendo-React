import ReactDOM from 'react-dom';
// import PrimeraApp from './PrimerApp';
//importacion de un estilo
import './index.css'
import CounterApp from './CounterApp';

// const divRoot = document.querySelector('#root');
const divRoot = document.querySelector('#root');



// ReactDOM.render( <PrimeraApp saludo="Titulo H1" /> , divRoot);
ReactDOM.render( <CounterApp numero={1} /> , divRoot);
