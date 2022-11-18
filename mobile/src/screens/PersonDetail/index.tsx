import {useState, useEffect} from "react"
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
import {IMovie} from "../../components/Movies"

import {styles} from "./styles"

export function PersonDetail() {
    const [actor, setActor] = useState<Actor>({} as Actor)
    const [isLoading, setIsLoading] = useState(true)

    const route = useRoute()
    const {personId, movieId, movieBackdrop} = route.params as PersonDetailParams

    const movieWichThePersonParticipated = {
        id: movieId,
        backdrop_path: movieBackdrop,
    }

    async function initializerActor() {
        try {
            const response = await api.get(`/person/${personId}`)
            setActor(response.data)

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
        setActor({} as Actor)
        initializerActor()
    }, [personId])

    const asDate = (date?: string) => moment(date).format("DD/MM/YYYY")
    const deathday = actor.deathday !== null ? `- ${asDate(actor.deathday)}` : ""

    return (
        <Background>
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
                                uri: getMovieCastPicture(actor),
                            }}
                        />
                    </Shadow>

                    <Text style={styles.headerTitle}>{actor.name}</Text>
                    
                    {actor.id && (
                        <>
                            <Rating
                                // 0 - 100
                                value={actor.popularity / 10}
                                isPopularity
                            />

                            <View style={styles.headerRow}>
                                <Text style={styles.detail} numberOfLines={2}>
                                    {actor.place_of_birth ?? "Desconhecido"}
                                </Text>

                                <Text style={[styles.detail, {borderRightWidth: 0}]}>
                                    {asDate(actor.birthday)} {deathday}
                                </Text>
                            </View>
                        </>
                    )}
                </View>
            </MovieHeader>

            <LoaderContainer isLoading={isLoading} style={styles.container}>
                <Text style={styles.title}>Biografia</Text>
                <Text style={styles.storyline}>{actor?.biography}</Text>
            </LoaderContainer>
        </Background>
    )
}
