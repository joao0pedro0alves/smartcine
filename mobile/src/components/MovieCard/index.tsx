import {Pressable, View, Image, Text, PressableProps} from "react-native"
import moment from 'moment'

import {IMovie} from "../../@types"
import {THEMOVIEDB_BANNER_URL} from "../../config/themoviedb"

import posterNotFound from '../../assets/poster-not-found.png'

import {styles} from "./styles"

interface MovieCardProps extends PressableProps {
    data: IMovie
}

export function MovieCard({data, ...props}: MovieCardProps) {
    return (
        <Pressable style={styles.container} {...props}>
            <Image
                style={styles.poster}
                defaultSource={posterNotFound}
                source={{
                    uri: `${THEMOVIEDB_BANNER_URL}/${data.poster_path}`,
                }}
            />

            <View style={styles.content}>
                <Text style={styles.title}>{data.title}</Text>
                
                <View style={styles.detail}>
                    <Text style={styles.detailText}>
                        {data.release_date ? moment(data.release_date).format("YYYY") : 'Não informada'}
                    </Text>
                    <Text style={[styles.detailText, {borderRightWidth: 0}]}>
                        {data.vote_count} Avaliações
                    </Text>
                </View>

                <Text numberOfLines={3} style={styles.overview}>
                    {data.overview}
                </Text>
            </View>
        </Pressable>
    )
}
