import {Modal, ModalProps, View, Pressable, Text, Image, TouchableOpacity} from "react-native"
import {Ionicons, AntDesign, Feather} from "@expo/vector-icons"
import {useNavigation} from "@react-navigation/native"
import moment from "moment"

import {IMovie} from "../../@types"
import {THEMOVIEDB_BANNER_URL} from "../../config/themoviedb"
import {useFavoriteMovies} from "../../hooks/useFavoriteMovies"
import {getAverageColor} from '../../utils/getAverageColor'

import {styles} from "./styles"
import {THEME} from "../../theme"

interface SummaryProps extends ModalProps {
    current: IMovie | null
    onRequestClose: () => void
}

export function Summary({current, onRequestClose, ...props}: SummaryProps) {
    const isMovie = current?.media_type === undefined || current?.media_type === 'movie'

    const favoriteMovies = useFavoriteMovies()

    const {navigate} = useNavigation()

    function handleShowMovieTrailer() {
        if (current) {
            navigate("movieTrailer", {
                movieId: current?.id,
                title: current.title,
            })
            
            onRequestClose()
        }
    }

    function handleShowMovieDetail() {
        if (current) {
            navigate("movieDetail", {
                movieId: current?.id,
                title: current.title,
            })
            
            onRequestClose()
        }
    }

    function handleAddMovie() {
        if (current) {
            favoriteMovies.add(current)
            onRequestClose()
        }
    }

    return (
        <Modal animationType="slide" transparent {...props}>
            <View style={styles.screen}>
                <Pressable onPress={onRequestClose} style={{flex: 1}} />

                <View style={styles.container}>
                    <View style={styles.content}>
                        <Image
                            resizeMode="cover"
                            style={styles.movieBanner}
                            source={{
                                uri: `${THEMOVIEDB_BANNER_URL}/${current?.poster_path}`,
                            }}
                        />

                        <View style={styles.movieInnerContent}>
                            <Text style={styles.movieTitle} numberOfLines={1}>
                                {current?.title || current?.name}
                            </Text>

                            <View style={styles.movieDetail}>
                                <Text style={styles.movieTextSecondary}>
                                    {moment(current?.release_date).format(
                                        "YYYY"
                                    )}
                                </Text>
                                <Text style={[styles.movieVoteAverage, {backgroundColor: getAverageColor(current?.vote_average)}]}>
                                    {parseFloat(String(current?.vote_average)).toFixed(1)}
                                </Text>
                                <Text style={styles.movieTextSecondary}>
                                    {current?.vote_count} Avaliações
                                </Text>
                            </View>

                            <Text style={styles.movieSummary} numberOfLines={5}>
                                {current?.overview}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.controls}>
                        <TouchableOpacity activeOpacity={0.8} disabled={!isMovie} style={styles.control} onPress={handleShowMovieDetail}>
                            <View style={styles.controlIcon}>
                                <Feather
                                    name="info"
                                    color={THEME.COLORS.TEXT}
                                    size={THEME.FONT_SIZE.LG}
                                />
                            </View>
                            <Text style={styles.controlText}>Saiba mais</Text>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.8} disabled={!isMovie} style={styles.control} onPress={handleAddMovie}>
                            <View style={styles.controlIcon}>
                                <AntDesign
                                    name="plus"
                                    color={THEME.COLORS.TEXT}
                                    size={THEME.FONT_SIZE.LG}
                                />
                            </View>
                            <Text style={styles.controlText}>Minha lista</Text>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.8} disabled={!isMovie} style={styles.control} onPress={handleShowMovieTrailer}>
                            <View
                                style={[
                                    styles.controlIcon,
                                    styles.controlIconActive,
                                ]}
                            >
                                <Ionicons
                                    name="play"
                                    color={THEME.COLORS.CAPTION_900}
                                    size={THEME.FONT_SIZE.LG}
                                />
                            </View>
                            <Text style={styles.controlText}>Trailer</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}
