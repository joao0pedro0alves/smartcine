import {useState, useEffect, useMemo} from "react"
import {View, Text, TouchableOpacity} from "react-native"
import {Entypo} from '@expo/vector-icons'
import {useRoute, useNavigation} from "@react-navigation/native"
import Toast from "react-native-toast-message"

import moment from 'moment'

import {api} from "../../services/api"
import {MovieDetailParams} from "../../@types/navigation"
import {convertMinutesToHourString} from "../../utils/convertMinutesToHourString"

import Movies, {IMovie} from "../../components/Movies"
import {Background} from "../../components/Background"
import {MovieHeader} from "../../components/MovieHeader"
import {LoaderContainer} from "../../components/LoaderContainer"
import {Rating} from "../../components/Rating"
import {Reviews} from "../../components/Reviews"
import {Credits} from "../../components/Credits"
import {Summary} from "../../components/Summary"

import {styles} from "./styles"
import {THEME} from "../../theme"

export function MovieDetail() {
    const [movie, setMovie] = useState<IMovie | null>(null)
    const [selectedMovie, setSelectedMovie] = useState<IMovie | null>(null)
    const [loading, setLoading] = useState(true)

    const route = useRoute()
    const {movieId} = route.params as MovieDetailParams

    const {navigate} = useNavigation()

    async function fetchMovie() {
        try {
            setLoading(true)

            const response = await api.get(`movie/${movieId}`)
            setMovie(response.data)
            
        } catch (error) {

            Toast.show({
                type: "error",
                text1: "Opa!",
                text2: "Não foi poosível carregar o filme, tente novamente mais tarde.",
            })

            throw error

        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        setMovie(null)
        fetchMovie()
    }, [movieId])

    const displayHeader = useMemo(() => {
        return (
            <MovieHeader movie={movie} showBackButton showFavoriteButton>
                <View style={styles.playContainer}>
                    <TouchableOpacity
                        style={styles.play}
                        onPress={() =>
                            navigate("movieTrailer", {
                                movieId,
                                title: movie?.title || "",
                            })
                        }
                    >
                        <Entypo
                            name="controller-play"
                            color={THEME.COLORS.CAPTION_900}
                            size={40}
                        />
                    </TouchableOpacity>
                </View>

                {movie && (
                    <View style={styles.header}>
                        <Text style={styles.headerTitle}>{movie?.title}</Text>

                        <Rating
                            value={movie?.vote_average}
                            evaluationsCount={movie?.vote_count}
                        />

                        <View style={styles.headerMovieDetails}>
                            <Text style={styles.headerMovieDetail}>
                                {moment(movie?.release_date).format("YYYY")}
                            </Text>
                            <Text style={styles.headerMovieDetail}>
                                {convertMinutesToHourString(movie?.runtime)}
                            </Text>
                            <Text
                                numberOfLines={1}
                                style={[styles.headerMovieDetail, styles.genders]}
                            >
                                {movie.genres?.map((genre) => genre.name).join(", ")}
                            </Text>
                        </View>
                    </View>
                )}
            </MovieHeader>
        )
    }, [movie])

    return (
        <Background>
            {displayHeader}

            <LoaderContainer isLoading={loading} style={styles.container}>
                <Text style={styles.title}>Sinopse</Text>
                <Text style={styles.storyline}>{movie?.overview}</Text>

                <Credits
                    movieId={movieId}
                    onPressActor={(actor) =>
                        navigate("personDetail", {
                            movieId: movie?.id,
                            movieBackdrop: movie?.backdrop_path,
                            personId: actor.id + "",
                            name: actor.original_name,
                        })
                    }
                />

                <Movies
                    showSeeAll={false}
                    title="Filmes similares"
                    url={`movie/${movieId}/similar`}
                    onPressMovie={setSelectedMovie}
                />

                <Movies
                    showSeeAll={false}
                    title="Recomendados"
                    url={`movie/${movieId}/recommendations`}
                    onPressMovie={setSelectedMovie}
                />

                <Reviews movieId={movieId} />
            </LoaderContainer>

            <Summary
                current={selectedMovie}
                visible={!!selectedMovie}
                onRequestClose={() => setSelectedMovie(null)}
            />
        </Background>
    )
}
