import {createNativeStackNavigator} from "@react-navigation/native-stack"

import {Home} from "../screens/Home"
import {MovieDetail} from "../screens/MovieDetail"
import {MovieTrailer} from "../screens/MovieTrailer"

import {PersonDetail} from "../screens/PersonDetail"

const {Navigator, Screen} = createNativeStackNavigator()

export function StackRoutes() {
    return (
        <Navigator
            initialRouteName="root"
            screenOptions={{
                statusBarAnimation: "slide",
                statusBarTranslucent: true,
                headerShown: false,
                animation: 'fade_from_bottom'
            }}
        >
            <Screen name="root" component={Home} />
            <Screen name="movieDetail" component={MovieDetail} />
            <Screen name="movieTrailer" component={MovieTrailer} />
            <Screen name="personDetail" component={PersonDetail} />
        </Navigator>
    )
}
