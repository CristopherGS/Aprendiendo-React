import PropTypes from 'prop-types';

//valor por defecto

//validacion de la properties
const PrimeraApp = ( { saludo, subtitle } ) => {

    

    //properties
     console.log(saludo)

   return  (
       //es un Fragment de forma corta y react lo auto completa
       //PARA IMPRIMIR UN OBJETO {JSON.stringify(obj)}
        <>  
            <h1>{saludo}</h1>
            {/* <pre> {JSON.stringify(obj, null, 3)} </pre> */}
            <p>{subtitle}</p>
        </>
   );
};


// propiedad requerida para obligar a mandar un propiedad
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

//valor de la propiedad por defecto
PrimeraApp.defaultProps = {
    subtitle: 'Esta es mi primera aplicacion con react'
}




export default PrimeraApp;