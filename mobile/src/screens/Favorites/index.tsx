import {useState, useEffect} from "react"
import {View, Image, TouchableOpacity, Text} from "react-native"
import {MaterialIcons} from "@expo/vector-icons"
import {Shadow} from "react-native-shadow-2"
import {useNavigation} from "@react-navigation/native"

import {IMovie} from "../../@types"
import {THEMOVIEDB_BANNER_URL} from "../../config/themoviedb"
import {useFavoriteMovies} from "../../hooks/useFavoriteMovies"

import {Background} from "../../components/Background"
import {FavoriteMovies} from "../../components/FavoriteMovies"
import {Header} from "../../components/Header"
import {MovieHeader} from "../../components/MovieHeader"
import {WatchProviders} from "../../components/WatchProviders"

import {styles} from "./styles"
import {THEME} from "../../theme"

export function Favorites() {
    const {data} = useFavoriteMovies()
    const [selectedMovie, setSelectedMovie] = useState<IMovie>({} as IMovie)

    const {navigate} = useNavigation()

    useEffect(() => {
        if (data.length > 0) {
            setSelectedMovie(data[0])
        }
    }, [data])

    return (
        <Background>
            {selectedMovie.id ? (
                <MovieHeader
                    movie={selectedMovie}
                    containerStyle={styles.movieHeader}
                >
                    <View style={styles.header}>
                        <Shadow>
                            <Image
                                resizeMode="cover"
                                style={styles.poster}
                                source={{
                                    uri: `${THEMOVIEDB_BANNER_URL}/${selectedMovie.poster_path}`,
                                }}
                            />
                        </Shadow>

                        <WatchProviders movieId={selectedMovie.id} />

                        <TouchableOpacity style={styles.buttonDetail} onPress={() => navigate('movieDetail', {
                            movieId: selectedMovie.id,
                            title: selectedMovie.title
                        })}>
                            <Text style={styles.buttonDetailText}>Detalhes</Text>

                            <MaterialIcons
                                name="keyboard-arrow-down"
                                color={THEME.COLORS.CAPTION_300}
                                size={THEME.FONT_SIZE.MD}
                            />
                        </TouchableOpacity>
                    </View>
                </MovieHeader>
            ) : (
                <Header title="Meus favoritos" />
            )}

            <View style={styles.container}>
                <FavoriteMovies title=" " onPressMovie={setSelectedMovie} />
            </View>
        </Background>
    )
}
