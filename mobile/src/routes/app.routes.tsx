import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {Octicons, MaterialIcons} from "@expo/vector-icons"

import {styles} from "./styles"
import {TabBarIcon} from "../components/TabBarIcon"

import {StackRoutes} from './stack.routes'
import {Favorites} from "../screens/Favorites"
import {MovieSearch} from "../screens/MovieSearch"

const {Navigator, Screen} = createBottomTabNavigator()

export function AppRoutes() {
    return (
        <Navigator
            initialRouteName="home"
            screenOptions={{
                headerShown: false,
                tabBarStyle: styles.tabBarStyle,
                tabBarLabelStyle: styles.tabBarLabelStyle,
                tabBarItemStyle: styles.tabBarItemStyle,
                tabBarHideOnKeyboard: true
            }}
        >
            <Screen
                name="home"
                component={StackRoutes}
                options={{
                    title: 'Início',
                    tabBarIcon: (props) => (
                        <TabBarIcon
                            {...props}
                            Icon={<Octicons name="home" />}
                        />
                    ),
                }}
            />
            <Screen
                name="search"
                component={MovieSearch}
                options={{
                    title: 'Pesquisar',
                    tabBarIcon: (props) => (
                        <TabBarIcon
                            {...props}
                            Icon={<Octicons name="search" />}
                        />
                    ),
                }}
            />
            <Screen
                name="favorites"
                component={Favorites}
                options={{
                    title: 'Favoritos',
                    tabBarIcon: (props) => (
                        <TabBarIcon
                            {...props}
                            Icon={<MaterialIcons name="favorite-border" />}
                            FocusedIcon={<MaterialIcons name="favorite" />}
                        />
                    ),
                }}
            />
        </Navigator>
    )
}
