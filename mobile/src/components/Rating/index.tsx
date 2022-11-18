import {View, ViewProps} from "react-native"
import {FontAwesome} from "@expo/vector-icons"

import {styles} from "./styles"
import {THEME} from "../../theme"

interface RatingProps extends ViewProps {
    value?: number
    evaluationsCount?: number
    isPopularity?: boolean
}

const IMDB_METRIC_RATING = 10
const APP_METRIC_RATING = 5

export function Rating({value = 0, isPopularity}: RatingProps) {
    const ratingValue = value / (IMDB_METRIC_RATING / APP_METRIC_RATING)

    const getStarIconName = (starValue: number) => {
        const [int = 0, decimal = 0] = ratingValue.toString().split('.')

        if (int >= starValue) {
            return 'star'            
        }

        if (Number(int) === starValue - 1 && decimal > 0) {
            return 'star-half-empty'
        }

        else {
            return 'star-o'
        }
    }

    return (
        <View style={styles.container}>
            {[...Array(APP_METRIC_RATING)].map((_, i) => (
                <View style={styles.star} key={i}>
                    <FontAwesome
                        name={getStarIconName(i + 1)}
                        color={isPopularity ? THEME.COLORS.PRIMARY : THEME.COLORS.CUSTOM.RATING_STAR}
                        size={20}
                    />
                </View>
            ))}
        </View>
    )
}
