import {StyleSheet} from "react-native"
import {THEME} from "../../theme"

export const styles = StyleSheet.create({
    movieHeader: {
        paddingBottom: 0
    },
    poster: {
        height: 160,
        width: 120,
        borderRadius: 4,
        overflow: "hidden",
    },
    header: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'flex-end',
    },

    headerTitle: {
        marginTop: 16,
        color: THEME.COLORS.TEXT,
        fontFamily: THEME.FONT_FAMILY.SERIF.BOLD,
        fontSize: THEME.FONT_SIZE.LG
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    detail: {
        color: THEME.COLORS.CAPTION_500,
        fontFamily: THEME.FONT_FAMILY.SANS.REGULAR,
        fontSize: THEME.FONT_SIZE.XS,

        borderRightWidth: 1,
        borderRightColor: THEME.COLORS.CAPTION_500,
        paddingRight: 8,
        marginRight: 8,
    },

    container: {
        padding: 14
    },
    title: {
        color: THEME.COLORS.TEXT,
        fontFamily: THEME.FONT_FAMILY.SANS.BOLD,
        fontSize: THEME.FONT_SIZE.LG,
        textAlign: 'center',
        marginBottom: 8,
    },
    storyline: {
        color: THEME.COLORS.CAPTION_400,
        fontFamily: THEME.FONT_FAMILY.SANS.REGULAR,
        fontSize: THEME.FONT_SIZE.XS,
        textAlign: 'center',
        marginBottom: 16,
    }
})
