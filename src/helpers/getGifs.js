export const getGifs = async ( category ) => {
		
	const apiKey 	= 'C8o9dAQc8sRt0j5CzyQ0HHzFtTarDWFh';
	const url 		= `https://api.giphy.com/v1/gifs/search?api_key=${ apiKey }&q=${ category }&limit=10`;
	//const url = 'https://api.giphy.com/v1/gifs/search?api_key=C8o9dAQc8sRt0j5CzyQ0HHzFtTarDWFh&q=Hola';

	const response = await fetch(url);
	const { data } = await response.json();

	const gifs = data.map( img => ({
		id: img.id,
		title: img.title,
		url: img.images.downsized_medium.url
	}));

	return gifs;

}
