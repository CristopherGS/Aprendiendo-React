import { useState } from "react";
import PropTypes from 'prop-types';



export const AddCategory = ({ setCategory }) => {
    const [valorinput, setInputValue] = useState('');

    const extreareValor = (e) => {
        setInputValue(e.target.value);
    };


    const sumbit = (e) => {
        e.preventDefault();
        if(valorinput.trim().length > 2){
            setCategory( arr => [valorinput,...arr ] );
            setInputValue('')
        }
    };

    return (
        <form onSubmit={sumbit}>
            <h1>{valorinput}</h1>
            <input 
                type="text" 
                value={valorinput} 
                onChange={extreareValor} 
            />
        </form>
    );
};

AddCategory.propTypes = {
    setCategory: PropTypes.func.isRequired
}