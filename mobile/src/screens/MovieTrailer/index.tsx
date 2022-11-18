import {useState, useEffect} from "react"
import {View, FlatList} from "react-native"
import {useRoute, useNavigation} from "@react-navigation/native"
import Toast from "react-native-toast-message"

import {api} from "../../services/api"
import {MovieDetailParams} from "../../@types/navigation"

import {Background} from "../../components/Background"
import {LoaderContainer} from "../../components/LoaderContainer"
import {Header} from "../../components/Header"
import {Video, VideoData} from "../../components/Video"

import {styles} from "./styles"

export function MovieTrailer() {
    const [videos, setVideos] = useState<VideoData[]>([])
    const [loading, setLoading] = useState(true)

    const {goBack} = useNavigation()

    const route = useRoute()
    const {movieId, title} = route.params as MovieDetailParams

    useEffect(() => {
        const initializeVideos = async () => {
            if (movieId) {
                try {
                    const response = await api.get(`movie/${movieId}/videos`, )
                    const data = response.data.results.slice(0, 1)
    
                    setVideos(data)
                    setLoading(false)
    
                    if (data.length === 0) {
                        Toast.show({
                            type: "error",
                            text1: "Opa!",
                            text2: "Esse filme não possui videos cadastrados",
                            onHide: goBack
                        })
    
                    }
    
                } catch (error) {
                    Toast.show({
                        type: "error",
                        text1: "Opa!",
                        text2: "Não foi possível buscar os videos",
                    })
    
                    setLoading(false)
                }
            }
            }

        initializeVideos()
    }, [movieId])

    return (
        <Background 
            component={View}
            style={styles.container}
        >
            <Header 
                title={title}
                showBackButton
            />
            
            <LoaderContainer isLoading={loading} style={styles.content}>
                <FlatList 
                    data={videos}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => <Video data={item} />}
                />
            </LoaderContainer>

        </Background>
    )
}
