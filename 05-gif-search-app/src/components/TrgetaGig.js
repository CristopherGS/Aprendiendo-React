import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";


export const TrgetaGig = ({ category }) => {

    
    const {data:images, loading}=useFetchGifs(category)

    //peticion http a la api


    return (
        <>
            <h3>{category}</h3>
            {loading && <h2 className="animate__animated  animate__flash">Cargando.......</h2> } 
            <div className='cardPadre animate__animated  animate__fadeIn'>
                {
                    images.map(img => (
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
