import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGifs";
import { GifItem } from "./GifItem";


export const TrgetaGig = ({ category }) => {

    const [imagenes, setimagenes] = useState([])



    useEffect(() => {
        getGif(category)
            .then(setimagenes)
    }, [category])


    //peticion http a la api


    return (
        <>
            <h3>{category}</h3>
            <div className='cardPadre'>
                {
                    imagenes.map(img => (
                        <GifItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}
