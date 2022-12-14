import {useState, useEffect, memo} from "react"
import {
    FlatList,
    View,
    ViewProps,
    Image,
    Text,
    Animated,
    Easing,
    TouchableOpacity,
    ImageBackground,
} from "react-native"
import {useNavigation} from "@react-navigation/native"
import {LinearGradient} from "expo-linear-gradient"
import {Entypo} from "@expo/vector-icons"
import {Shadow} from "react-native-shadow-2"
import Toast from "react-native-toast-message"

import {IMovie} from "../../@types"
import {api} from "../../services/api"
import {getMovieBanner} from "../../utils/getMovieBanner"

import {THEME} from "../../theme"
import {styles} from "./styles"

export interface MoviesProps extends ViewProps {
    title?: string
    url?: string
    data?: IMovie[]
    showSeeAll?: boolean
    isLarge?: boolean

    onPressMovie?: (movie: IMovie) => void
    onLoadMovies?: (movies: IMovie[]) => void
}

const AnimatedLG = Animated.createAnimatedComponent(LinearGradient)

export function Movies({
    title,
    url,
    data: externalData,
    showSeeAll = true,
    isLarge = false,
    onPressMovie,
    onLoadMovies,
    ...props
}: MoviesProps) {
    const [data, setData] = useState<IMovie[]>([])
    const [loading, setLoading] = useState(Boolean(url))

    const {navigate} = useNavigation()

    const animatedValue = new Animated.Value(0)

    useEffect(() => {
        Animated.loop(
            Animated.timing(animatedValue, {
                toValue: 1,
                duration: 10000,
                easing: Easing.ease,
                useNativeDriver: true,
            })
        ).start()
    })

    const translateX = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [-112, 112],
    })

    useEffect(() => {
        async function loadMovies() {
            if (url) {
                try {
                    const response = await api.get(url)
                    const movies = response.data.results

                    setData(movies)

                    if (onLoadMovies) {
                        onLoadMovies(movies)
                    }
                } catch (error) {
                    Toast.show({
                        type: "error",
                        text1: "Opa!",
                        text2: "N??o foi poss??vel carregar os filmes.",
                    })
                } finally {
                    setLoading(false)
                }
            }
        }

        loadMovies()
    }, [url])

    function handleSeeAll() {
        navigate("search", {
            title,
            url,
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>

                {showSeeAll && (
                    <TouchableOpacity
                        style={styles.control}
                        onPress={handleSeeAll}
                    >
                        <Text style={styles.seeAll}>Ver todos</Text>
                        <Entypo
                            name="chevron-small-right"
                            color={THEME.COLORS.CAPTION_300}
                            size={24}
                        />
                    </TouchableOpacity>
                )}
            </View>

            {loading ? (
                <View style={styles.content}>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        data={[1, 2, 3, 4]}
                        renderItem={() => (
                            <AnimatedLG
                                style={[
                                    styles.poster,
                                    {transform: [{translateX}]},
                                ]}
                                colors={[
                                    THEME.COLORS.BACKGROUND_800,
                                    THEME.COLORS.BACKGROUND_700,
                                ]}
                                start={{x: 0, y: 0}}
                                end={{x: 1, y: 0}}
                            />
                        )}
                    />
                </View>
            ) : (
                <View style={styles.content} {...props}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={externalData || data}
                        keyExtractor={(item) => item.id}
                        renderItem={({item}) => (
                            <TouchableOpacity
                                activeOpacity={1}
                                onPress={() =>
                                    onPressMovie
                                        ? onPressMovie(item)
                                        : undefined
                                }
                            >
                                {isLarge ? (

                                    <ImageBackground
                                        resizeMode="cover"
                                        style={styles.backdrop}
                                        source={{
                                            uri: getMovieBanner(item),
                                        }}
                                    >
                                        <Shadow>
                                            <Image
                                                resizeMode="cover"
                                                style={[styles.poster, styles.posterSmall]}
                                                source={{
                                                    uri: getMovieBanner(item, true),
                                                }}
                                            />
                                        </Shadow>
                                        
                                        {item.overview && (
                                            <View style={styles.overviewContainer}>
                                                <Text style={styles.overview} numberOfLines={5}>
                                                    {item.overview}
                                                </Text>
                                            </View>
                                        )}
                                    </ImageBackground>

                                ) : (
                                    <Image
                                        resizeMode="cover"
                                        style={styles.poster}
                                        source={{
                                            uri: getMovieBanner(item, true),
                                        }}
                                    />
                                )}
                            </TouchableOpacity>
                        )}
                    />
                </View>
            )}
        </View>
    )
}

export default memo(Movies)
