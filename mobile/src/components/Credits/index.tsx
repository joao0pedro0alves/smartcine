import {useState, useEffect} from "react"
import {FlatList, View, Text, Image, TouchableOpacity} from "react-native"
import Toast from "react-native-toast-message"

import {api} from "../../services/api"
import {getMovieCastPicture} from "../../utils/getMovieBanner"
import {Actor, ICredits} from "../../@types"

import {styles} from "./styles"

interface CreditsProps {
    movieId: string
    onPressActor: (actor: Actor) => void
}

export function Credits({movieId, onPressActor}: CreditsProps) {
    const [credits, setCredits] = useState<ICredits>({} as ICredits)

    async function fetchCredits() {
        try {

            const response = await api.get(`movie/${movieId}/credits`)
            setCredits(response.data)
            
        } catch (error) {

            Toast.show({
                type: "error",
                text1: "Opa!",
                text2: "Não foi poosível carregar o elenco do filme, tente novamente mais tarde.",
            })

            throw error
            
        } finally {
        }

    }

    useEffect(() => {
        fetchCredits()
    }, [movieId])

    return (
        <View style={styles.container}>

            <View style={styles.listContainer}>
                <Text style={styles.title}>
                    Elenco
                </Text>

                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={credits.cast}
                    keyExtractor={item => item.id + ''}
                    renderItem={({item}) => (
                        <TouchableOpacity activeOpacity={0.8} style={styles.listItem} onPress={() => onPressActor(item)}>
                            <Image
                                resizeMode="cover"
                                style={styles.avatar}
                                source={{
                                    uri: getMovieCastPicture(item)
                                }}
                            />

                            <Text numberOfLines={1} style={styles.character}>
                                {item.character}
                            </Text>
                            <Text numberOfLines={1} style={styles.name}>
                                {item.original_name}
                            </Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    )
}
