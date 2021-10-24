import { useState } from "react";
import { AddCategory } from "./components/AddCategory";



const GifExpertApp = () => {
    // const category = ["One Piece", "Samurai x"];
    const [category, setCategory] = useState(["One Piece", "Samurai x"]);

    // const insertCategory = () => {
    //     setcategory((arr) =>  [...arr, 'Nuevo valor'] );
    // };
    return (
        <>
            <h2>GifExpert APP</h2> 
            <AddCategory setCategory={setCategory}/>
            <hr />
            <ol>
                {category.map((category) => {
                    return <li key={category}>{category}</li>;
                })}
            </ol>
        </>
    );
};
export default GifExpertApp;
