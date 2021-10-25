import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { TrgetaGig } from "./components/TrgetaGig";



const GifExpertApp = () => {

    const [category, setCategory] = useState(["One Punch"]);

    return (
        <>
            <h2>GifExpert APP</h2>
            <AddCategory setCategory={setCategory} />
            <hr />
            <ol>
                {
                    category.map( (category) =>
                        <TrgetaGig 
                            key={category}
                            category={category}
                        />
                    )
                }
            </ol>
        </>
    );
};
export default GifExpertApp;


//!VIDEO 13
