import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({

        data: [],
        loading: true
    });

    useEffect( () => {

        //Lanzar la peticion
        getGifs( category).then( imgs => {

            setState({

                data: imgs,
                loading: false

            })
        });

        //Lanzar unicamente cuando se cambie el parametro
    }, [ category ]);

    return state

    
}