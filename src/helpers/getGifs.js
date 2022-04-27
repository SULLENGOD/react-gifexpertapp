 //Solicitar los props
 export const getGifs = async ( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category )}&limit=10&api_key=wuI3splassWhByJG5RmEoCkMeFUn7JdW`

    //Hacer la peticion
    const resp = await fetch( url );

    const { data } = await resp.json();

    //configurar la informacion necesaria
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url

        }
    });

    return gifs;

}