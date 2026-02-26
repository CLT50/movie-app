const BASE_URL= ' https://api.themoviedb.org/3';



export const getPopularMovies= async()=> {
    const response= await fetch(`${BASE_URL}/movie/popular?api_key=${import.meta.env.VITE_API_KEY}`);
    const data= await response.json()
    return data.results
};


export const searchMovies= async(query)=> {
    const response= await fetch(`${BASE_URL}/search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=${encodeURIComponent(query)}`);
    const data= await response.json()
    return data.results
};

export const moviePrice = (movie) => {
    if (movie.release_date?.split('-')[0] >= 2020) {
        return 19.99;
    } else if (movie.release_date?.split('-')[0] >= 2010) {
        return 15.99;
    } else {
        return 12.99;
    }   
};

export function getMovieData(id) {
    let movieData = movies.find(movie => movie.id === id);

    if (movieData == undefined) {
        console.log("Movie data does not exist for ID: " + id);
        return undefined;
    }

    return movieData;
}

