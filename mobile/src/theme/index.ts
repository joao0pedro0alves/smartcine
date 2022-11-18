import {StyleSheet} from "react-native"

const DEFAULT_THEME = {
    COLORS: {
        BACKGROUND: "#000000",
        BACKGROUND_900: "#121214",
        BACKGROUND_800: "#18181B",
        BACKGROUND_700: "#333333",
        BACKGROUND_600: "#555555",
        BACKGROUND_400: "#F9FAFC",
        BACKGROUND_PAPER: "#FFFFFF",

        TEXT: "#FFFFFF",
        BLACK: "#000000",

        CAPTION_900: "#222222",
        CAPTION_500: "#71717A",
        CAPTION_400: "#A1A1AA",
        CAPTION_300: "#D4D4D8",

        SHAPE: "#2A2634",
        DIVIDER: "#EFEFEF",
        DISABLED: "#CBCBDD",

        PRIMARY: "#004FA4",
        SUCCESS: "#2E7D32",
        ALERT: "#D32F2F",
        WARNING: "#F3C200",

        FOOTER: ["rgba(0,0,0,0)", "rgba(0,0,0,0.9)"],
        WHITE_OVERLAY: "rgba(255, 255, 255, 0.45)",
        OVERLAY: "rgba(0,0,0,0.25)",

        CUSTOM: {
            RATING_STAR: '#FFE234'
        }
    },

    FONT_FAMILY: {
        SANS: {
            REGULAR: "Roboto_400Regular",
            BOLD: "Roboto_700Bold",
            BLACK: "Roboto_900Black",
        },
        SERIF: {
            REGULAR: "Philosopher_400Regular",
            BOLD: "Philosopher_700Bold",
            ITALIC: "Philosopher_400Regular_Italic",
        }
    },

    FONT_SIZE: {
        XS: 12,
        SM: 14,
        MD: 16,
        LG: 24,
        XL: 32,
    },
}

const MIXINS = StyleSheet.create({
    SHADOW_1: {
        shadowColor: DEFAULT_THEME.COLORS.OVERLAY,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowRadius: 30,
        elevation: 30,
    },
    OVERLAY: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: DEFAULT_THEME.COLORS.OVERLAY,
    },
    MODAL_VIEW: {
        alignItems: "center",
        overflow: "hidden",
        margin: 20,
        padding: 32,

        borderRadius: 8,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,

        backgroundColor: DEFAULT_THEME.COLORS.BACKGROUND_PAPER,
        shadowColor: DEFAULT_THEME.COLORS.SHAPE,
    },
})

export const THEME = {...DEFAULT_THEME, MIXINS}
