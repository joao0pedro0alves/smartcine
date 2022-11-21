import {StyleSheet} from "react-native"
import {THEME} from "../../theme"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 14,
        paddingBottom: 74,
        backgroundColor: THEME.COLORS.BACKGROUND,
    },
    copyText: {
        color: THEME.COLORS.CAPTION_400,
        fontSize: THEME.FONT_SIZE.XS,
        fontFamily: THEME.FONT_FAMILY.SANS.REGULAR,
        textAlign: 'center',
        marginBottom: 7,
    },
    credits: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    social: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    credit: {
        flex: 1,
    },
    tmdbSvg: {
        height: 30,
        width: 100
    },
    logoSvg: {
        height: 40,
        width: 40
    },
    icon: {
        marginLeft: 12
    }
})
