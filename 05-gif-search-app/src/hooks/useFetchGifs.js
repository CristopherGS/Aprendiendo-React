import { useState, useEffect } from "react"
import { getGif } from "../helpers/getGifs"

//hooks personalles
export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {

        getGif(category)
            .then((img) => {

                setTimeout(() => {
                    setState({
                        data: img,
                        loading: false
                    });
                }, 1500);

                // setState({
                //     data: img,
                //     loading: false
                // });

            })
    }, [category])



    return state; // {data:[], loading: true}

}