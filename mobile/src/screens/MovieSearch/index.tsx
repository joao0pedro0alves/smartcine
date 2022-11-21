import {useState, useEffect} from "react"
import {FlatList, View} from "react-native"
import {useNavigation, useRoute} from "@react-navigation/native"
import Toast from "react-native-toast-message"

import {IMovie} from "../../@types"
import {api} from "../../services/api"
import {MovieSearchParams} from "../../@types/navigation"
import {uniqueArray} from "../../utils/uniqueArray"

import {Background} from "../../components/Background"
import {Input} from "../../components/Input"
import {MovieCard} from "../../components/MovieCard"
import {ItemSeparator} from "../../components/ItemSeparator"
import {EmptyMovieList} from "../../components/EmptyMovieList"
import {LoaderContainer} from "../../components/LoaderContainer"
import {Header} from "../../components/Header"

import {styles} from "./styles"

const SEARCH_DELAY_TIME = 1000 / 2 // 0.5 seconds
const SEARCH_URL = 'search/movie'

interface Result {
    page: number
    total_pages: number
    total_results: number
}

export function MovieSearch() {
    const [movieTitle, setMovieTitle] = useState("")
    const [result, setResult] = useState<Result>({} as Result)
    const [movies, setMovies] = useState<IMovie[]>([])
    const [isLoading, setIsLoading] = useState(false)   

    const {navigate} = useNavigation()

    const route = useRoute()
    const {title, url} = (route.params || {}) as MovieSearchParams

    const isLoadingContainer = isLoading && movies.length === 0
    const isSearchList = !title

    async function fetchMovies(page: number = 1) {
        try {
            const params = {
                query: movieTitle,
                page,
            }

            setIsLoading(true)

            const response = await api.get(url || SEARCH_URL, { params })
            const {results, ...newResult} = response.data

            setResult(newResult)

            setMovies((previousResults) => {
                const newResults = previousResults.concat(results)
                return uniqueArray(newResults)
            })

        } catch (error) {
            Toast.show({
                type: "error",
                text1: "Opa!",
                text2: "Não foi possível buscar os filmes, tente novamente mais tarde.",
            })

            throw error
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        let timeOut: NodeJS.Timeout | undefined = undefined
        setMovies([])

        if (movieTitle.trim()) {
            timeOut = setTimeout(fetchMovies, SEARCH_DELAY_TIME)
        }

        return () => clearTimeout(timeOut)
    }, [movieTitle])

    useEffect(() => {
        setMovies([])
        setMovieTitle('')

        if (url) {
            fetchMovies()
        }
    }, [url])

    async function loadMoreData() {
        const newPage = result.page + 1

        if (newPage <= result.total_pages) {
            await fetchMovies(newPage)
        }
    }

    return (
        <Background component={View}>
            <Header
                title={title || "Pesquisar"}
                showBackButton
                showSearchButton={!isSearchList}
            />

            <View style={styles.container}>
                {isSearchList && (
                    <View style={styles.inputContainer}>
                        <Input
                            placeholder="Digite o nome do filme que deseja buscar."
                            value={movieTitle}
                            onChangeText={setMovieTitle}
                        />
                    </View>
                )}

                <LoaderContainer
                    style={isLoadingContainer ? styles.loaderContainer : {}}
                    isLoading={isLoadingContainer}
                >
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{
                            paddingTop: isSearchList ? 14 : 0,
                            paddingBottom: 42,
                        }}
                        data={movies}
                        keyExtractor={(item) => item.id}
                        renderItem={({item}) => (
                            <MovieCard
                                data={item}
                                onPress={() =>
                                    navigate("movieDetail", {
                                        movieId: item.id,
                                        title: item.title,
                                    })
                                }
                            />
                        )}
                        onEndReachedThreshold={0.1}
                        onEndReached={loadMoreData}
                        ItemSeparatorComponent={ItemSeparator}
                        ListEmptyComponent={() => (
                            <EmptyMovieList query={movieTitle} />
                        )}
                    />
                </LoaderContainer>
            </View>
        </Background>
    )
}
