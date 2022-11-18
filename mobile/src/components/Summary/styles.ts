import {StyleSheet, Dimensions} from "react-native"
import {THEME} from "../../theme"

export const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    overlay: {
        ...THEME.MIXINS.OVERLAY,
        flex: 1,
    },
    container: {
        backgroundColor: THEME.COLORS.BACKGROUND_700,
        overflow: 'hidden',
        position: 'absolute',

        height: Dimensions.get('screen').height / 3,
        width: Dimensions.get('screen').width,

        bottom: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },

    content: {
        flexDirection: 'row',
        padding: 12
    },
    movieBanner: {
        width: 112,
        height: 150,
        borderRadius: 4,
        justifyContent: "flex-end",
        overflow: "hidden",
        marginRight: 6,
    },

    movieTitle: {
        color: THEME.COLORS.TEXT,
        fontSize: THEME.FONT_SIZE.MD,
        fontFamily: THEME.FONT_FAMILY.SANS.BOLD
    },
    movieInnerContent: {
        paddingHorizontal: 12,
        flex: 2
    },
    movieDetail: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 4
    },
    movieTextSecondary: {
        color: THEME.COLORS.CAPTION_300,
        fontSize: THEME.FONT_SIZE.XS,
        fontFamily: THEME.FONT_FAMILY.SANS.REGULAR,
        marginRight: 16
    },
    movieVoteAverage: {
        color: THEME.COLORS.TEXT,
        fontSize: THEME.FONT_SIZE.XS,
        fontFamily: THEME.FONT_FAMILY.SANS.BOLD,
        backgroundColor: THEME.COLORS.WARNING,
        marginRight: 16,
        borderRadius: 2,
        width: 30,
        padding: 3,
        textAlign: 'center',
    },
    movieSummary: {
        color: THEME.COLORS.CAPTION_300,
        fontSize: THEME.FONT_SIZE.XS,
        fontFamily: THEME.FONT_FAMILY.SANS.REGULAR,
    },
    
    controls: {
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    control: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    controlIcon: {
        height: 50,
        width: 50,
        borderRadius: 25,       
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: THEME.COLORS.BACKGROUND_600,
    },
    controlIconActive: {
        backgroundColor: THEME.COLORS.BACKGROUND_400,
    },
    controlText: {
        color: THEME.COLORS.CAPTION_300,
        fontSize: THEME.FONT_SIZE.XS,
        fontFamily: THEME.FONT_FAMILY.SANS.REGULAR,
        marginTop: 4,
    }
})
