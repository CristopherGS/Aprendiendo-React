



export const getGif = async (category) => {
    const key = 'S0eSGU5nsF6odoLn3Sxed6PzBhb9ZCGr';
    const url = `https://api.giphy.com/v1/gifs/trending?q=${encodeURI(category)}&limit=5&api_key=${key}`
    const respuesta = await fetch(url);
    const { data } = await respuesta.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    return gifs;
}