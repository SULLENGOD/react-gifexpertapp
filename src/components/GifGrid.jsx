import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    //Custom Hook utilizando los props
    const { data:images, loading } = useFetchGifs( category );


  return (
      <>
        <h3>{ category }</h3>
        {loading && <p className='animate__animated animate__flash'>Loading...</p>}

        <div className='card-grid'>
            
            {/* mapear las imagenes al componente hijo */}
            {
                images.map( img => (

                    <GifGridItem 
                        key={ img.id }
                        {...img}
                    />
                ))    
            }
        </div>
      </>
  )
}
