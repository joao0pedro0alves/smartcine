export const apiEndPoints = {
    movie: {
        popular: "movie/popular",
        upcoming: "movie/upcoming",
        nowPlaying: "movie/now_playing",
        topRated: "movie/top_rated",

        credits(movieId: string) {
            return `movie/${movieId}/credits`
        }
    },

    
}