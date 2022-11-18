import {useEffect, useState} from "react"
import {View, FlatList, Text, Image} from "react-native"
import {FontAwesome} from "@expo/vector-icons"

import {api} from '../../services/api'
import {getGravatarUrl} from "../../utils/gravatar"

import {styles} from "./styles"
import {THEME} from "../../theme"

interface Reviews {
    id: string
    url: string
    author: string
    content: string
    author_details: {
        name: string
        username: string
        avatar_path: string | null
        rating: number | null
    }
}

interface ReviewsProps {
    movieId: string
}

export function Reviews({movieId}: ReviewsProps) {
    const [reviews, setReviews] = useState<Reviews[]>([])
    const [_, setIsLoading] = useState(true)

    async function fetchReviews() {
        try {

            const response = await api.get(`/movie/${movieId}/reviews`)
            setReviews(response.data.results)

        } catch (error) {
            
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchReviews()
    }, [movieId])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Review</Text>
            </View>

            <View style={styles.content}>
                <FlatList
                    horizontal
                    data={reviews}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => (
                        <View style={styles.impression}>
                            <View style={styles.impressionHeader}>
                                <Image
                                    style={styles.avatar}
                                    source={{
                                        uri: getGravatarUrl(item.author_details.avatar_path),
                                    }}
                                />

                                <View style={styles.author}>
                                    <Text style={styles.name}>{item.author_details.name}</Text>
                                    <Text style={styles.username}>{item.author_details.username}</Text>
                                    
                                    <View style={styles.rating}>
                                        <FontAwesome name='star' color={THEME.COLORS.CUSTOM.RATING_STAR} size={20} />
                                        <Text style={styles.ratingText}>{item.author_details.rating}</Text>
                                    </View>
                                </View>
                            </View>

                            <Text style={styles.reviewContent}>{item.content}</Text>
                        </View>
                    )}
                />
            </View>
        </View>
    )
}
