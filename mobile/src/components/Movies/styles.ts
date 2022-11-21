import {Dimensions, StyleSheet} from "react-native"
import {THEME} from "../../theme"

export const styles = StyleSheet.create({
    container: {
        padding: 12,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    control: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        color: THEME.COLORS.TEXT,
        fontFamily: THEME.FONT_FAMILY.SANS.BOLD,
        fontSize: THEME.FONT_SIZE.MD,
    },
    seeAll: {
        color: THEME.COLORS.CAPTION_300,
        fontFamily: THEME.FONT_FAMILY.SANS.REGULAR,
        fontSize: THEME.FONT_SIZE.XS,
    },
    content: {
        marginTop: 16,
    },
    poster: {
        width: 112,
        height: 150,
        borderRadius: 4,
        marginRight: 6,
        overflow: "hidden",
    },
    posterSmall: {
        width: 100,
        height: 133,
        marginRight: 0,
    },

    backdrop: {
        width: Dimensions.get('screen').width / 1.2,
        height: 200,
        borderRadius: 4,
        marginRight: 6,
        overflow: "hidden",

        padding: 14,
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    overviewContainer: {
        width: 200,
        height: 133,
        padding: 14,
        borderRadius: 4,
        backgroundColor: THEME.COLORS.OVERLAY,
    },
    overview: {
        color: THEME.COLORS.CAPTION_300,
        fontFamily: THEME.FONT_FAMILY.SANS.REGULAR,
        fontSize: THEME.FONT_SIZE.XS,
    }
})
