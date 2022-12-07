export const apiEndPoints = {
    movie: {
        popular: "movie/popular",
        upcoming: "movie/upcoming",
        nowPlaying: "movie/now_playing",
        topRated: "movie/top_rated",

        similar(movieId: string) {
            return `movie/${movieId}/similar`
        },
        recommendations(movieId: string) {
            return `movie/${movieId}/recommendations`
        },

        show(movieId: string) {
            return `movie/${movieId}`
        },
        credits(movieId: string) {
            return `movie/${movieId}/credits`
        },
        videos(movieId: string) {
            return `movie/${movieId}/videos`
        },
    },

    
}