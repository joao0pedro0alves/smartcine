import {ScrollView, View, ViewProps} from "react-native"

import {Footer} from "../Footer"
import {styles} from "./styles"

interface BackgroundProps extends ViewProps {
    component?: typeof ScrollView | typeof View
    showFooter?: boolean
}

export function Background({
    style,
    children,
    component: Component = ScrollView,
    showFooter,
    ...props
}: BackgroundProps) {
    return (
        <Component {...props} style={[styles.container, style]}>
            <View style={[styles.content, {marginBottom: showFooter ? 0 : 60}]}>{children}</View>
            {showFooter && <Footer />}
        </Component>
    )
}
