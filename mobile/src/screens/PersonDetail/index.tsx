import {useState, useEffect, useMemo} from "react"
import {View, Image, Text} from "react-native"
import {Shadow} from "react-native-shadow-2"
import {useRoute} from "@react-navigation/native"
import Toast from "react-native-toast-message"
import moment from "moment"

import {Actor} from "../../@types"
import {PersonDetailParams} from "../../@types/navigation"
import {api} from "../../services/api"
import {getMovieCastPicture} from "../../utils/getMovieBanner"

import {Background} from "../../components/Background"
import {MovieHeader} from "../../components/MovieHeader"
import {LoaderContainer} from "../../components/LoaderContainer"
import {Rating} from "../../components/Rating"
import {Summary} from "../../components/Summary"
import Movies, {IMovie} from "../../components/Movies"

import {styles} from "./styles"

export function PersonDetail() {
    const [person, setPerson] = useState<Actor>({} as Actor)
    const [isLoading, setIsLoading] = useState(true)
    
    const [similarMovies, setSimilarMovies] = useState<IMovie[]>([])
    const [selectedMovie, setSelectedMovie] = useState<IMovie | null>(null)

    const route = useRoute()
    const {personId, movieId, movieBackdrop} = route.params as PersonDetailParams

    const movieWichThePersonParticipated = {
        id: movieId,
        backdrop_path: movieBackdrop,
    }

    async function initializerActor() {
        try {
            const responseActor = await api.get(`/person/${personId}`)
            const actor = responseActor.data

            const responseSearch = await api.get(`search/multi?query=${actor.name}`)
            const results = responseSearch.data.results

            const similarMovies = results
                                    .filter((r: any) => r.known_for)
                                    .flatMap((r: any) => r.known_for)

            setPerson(actor)
            setSimilarMovies(similarMovies)

        } catch (error) {
            Toast.show({
                type: "error",
                text1: "Não foi possível buscar os dados do ator.",
                text2: "Tente novamente mais tarde.",
            })

        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        initializerActor()

        return () => {
            setPerson({} as Actor)
            setSimilarMovies([])
        }
    }, [personId])

    const asDate = (date?: string) => moment(date).format("DD/MM/YYYY")
    const deathday = person.deathday !== null ? `- ${asDate(person.deathday)}` : ""

    const displayHeader = useMemo(() => {
        return (
            <MovieHeader
                showBackButton
                showFavoriteButton
                movie={movieWichThePersonParticipated as IMovie}
                containerStyle={styles.movieHeader}
            >
                <View style={styles.header}>
                    <Shadow>
                        <Image
                            resizeMode="cover"
                            style={styles.poster}
                            source={{
                                uri: getMovieCastPicture(person),
                            }}
                        />
                    </Shadow>

                    <Text style={styles.headerTitle}>{person.name}</Text>

                    {person.id && (
                        <>
                            <Rating
                                // 0 - 100
                                value={person.popularity / 10}
                                isPopularity
                            />

                            <View style={styles.headerRow}>
                                <Text style={styles.detail} numberOfLines={2}>
                                    {person.place_of_birth ?? "Desconhecido"}
                                </Text>

                                <Text
                                    style={[
                                        styles.detail,
                                        {borderRightWidth: 0},
                                    ]}
                                >
                                    {asDate(person.birthday)} {deathday}
                                </Text>
                            </View>
                        </>
                    )}
                </View>
            </MovieHeader>
        )
    }, [person, movieId])

    return (
        <Background>
            {displayHeader}

            <LoaderContainer isLoading={isLoading} style={styles.container}>
                <Text style={styles.title}>Biografia</Text>
                <Text style={styles.storyline}>{person?.biography}</Text>
                
                {similarMovies.length > 0 && (
                    <Movies
                        showSeeAll={false}
                        title={`Mais de ${person.name}`}
                        data={similarMovies}
                        onPressMovie={setSelectedMovie}
                    />
                )}
            </LoaderContainer>

            <Summary
                current={selectedMovie}
                visible={!!selectedMovie}
                onRequestClose={() => setSelectedMovie(null)}
            />
        </Background>
    )
}
