import {StyleSheet, Dimensions} from "react-native"

const headerSize = Dimensions.get('screen').height / 1.5

export const styles = StyleSheet.create({
    cover: {
        width: Dimensions.get('screen').width,
        height: headerSize,
        borderRadius: 8,
        justifyContent: "flex-end",
        overflow: "hidden",
    },
    footer: {
        width: "100%",
        height: headerSize / 2,
        padding: 16,
        justifyContent: "flex-end",
        alignItems: 'center'
    },
})