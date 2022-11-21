import {ImageBackground, ImageBackgroundProps, StyleProp, TouchableOpacity, View, ViewStyle} from "react-native"
import {LinearGradient} from "expo-linear-gradient"
import {MaterialIcons} from "@expo/vector-icons"
import {useNavigation} from "@react-navigation/native"

import {IMovie} from "../../@types"
import {THEMOVIEDB_BANNER_URL} from "../../config/themoviedb"
import {useFavoriteMovies} from "../../hooks/useFavoriteMovies"
import {useIsFavorite} from "../../hooks/useIsFavorite"

import {THEME} from "../../theme"
import {styles} from "./styles"

interface MovieHeaderProps {
    children?: React.ReactNode
    resizeMode?: ImageBackgroundProps["resizeMode"]
    
    movie: IMovie | null
    isPoster?: boolean
    showBackButton?: boolean
    showFavoriteButton?: boolean
    containerStyle?: StyleProp<ViewStyle>
}

export function MovieHeader({
    children,
    resizeMode = "cover",
    movie,
    isPoster = false,
    showBackButton,
    showFavoriteButton,
    containerStyle
}: MovieHeaderProps) {

    const isFavorite = useIsFavorite()
    const favoriteMovies = useFavoriteMovies()
    const navigation = useNavigation()

    const EmptyBoxSpace = () => <View style={styles.emptyBox} />

    const renderFavoriteButton = () => {
        if (showFavoriteButton && movie) {
            return (
                <TouchableOpacity
                    onPress={() => favoriteMovies.toogle(movie)}
                >
                    {isFavorite("movies", movie.id) ? (
                        <MaterialIcons
                            size={THEME.FONT_SIZE.XL}
                            color={THEME.COLORS.PRIMARY}
                            name="favorite"
                        />
                    ) : (
                        <MaterialIcons
                            size={THEME.FONT_SIZE.XL}
                            color={THEME.COLORS.DISABLED}
                            name="favorite-border"
                        />
                    )}
                </TouchableOpacity>
            )
        } else return <EmptyBoxSpace />
    }

    const renderBackButton = () =>
        showBackButton ? (
            <TouchableOpacity onPress={navigation.goBack}>
                <MaterialIcons
                    name="arrow-back-ios"
                    size={THEME.FONT_SIZE.LG}
                    color={THEME.COLORS.TEXT}
                />
            </TouchableOpacity>
        ) : (
            <EmptyBoxSpace />
        )

    return (
        <ImageBackground
            resizeMode={resizeMode}
            style={styles.cover}
            source={{
                uri: `${THEMOVIEDB_BANNER_URL}/${isPoster ? movie?.poster_path : movie?.backdrop_path}`,
            }}
        >
            <View style={styles.controls}>
                {renderBackButton()}
                {renderFavoriteButton()}
            </View>

            <LinearGradient
                colors={THEME.COLORS.FOOTER}
                style={[styles.container, containerStyle]}
            >
                {children}
            </LinearGradient>
        </ImageBackground>
    )
}
