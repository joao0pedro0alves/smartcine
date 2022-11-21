import {View, Text} from "react-native"
import * as Linking from 'expo-linking'

import {styles} from './styles'

export function Footer() {

    // async function handleNavigate(link: string) {
    //     try {
    //         await Linking.openURL(link)
            
    //     } catch (error) {
    //         throw error
    //     }
    // }

    return (
        <View style={styles.container}>
            <Text style={styles.copyText}>
                &#169; Todos os recursos de imagem e dados pertencem ao
                themoviedb.org.
            </Text>

            {/* <View style={styles.credits}>
                <View style={styles.credit}>
                    <LogoSvg style={styles.logoSvg} />
                </View>
        
                <TouchableOpacity
                    style={styles.credit}
                    onPress={() => handleNavigate('https://www.themoviedb.org/')} 
                    activeOpacity={0.8}
                >
                    <LogoTMDBSvg style={styles.tmdbSvg} />
                </TouchableOpacity>

                <View style={[styles.social, styles.credit]}>
                    <TouchableOpacity onPress={() => handleNavigate('https://github.com/joao0pedro0alves')} activeOpacity={0.8}>
                        <AntDesign
                            style={styles.icon}
                            name="github"
                            color={THEME.COLORS.CAPTION_300}
                            size={25}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleNavigate('https://www.linkedin.com/in/jo%C3%A3o-pedro-alves-pereira-bb0052216/')} activeOpacity={0.8}>
                        <AntDesign
                            style={styles.icon}
                            name="linkedin-square"
                            color={THEME.COLORS.CAPTION_300}
                            size={25}
                        />
                    </TouchableOpacity>
                </View>
            </View> */}
        </View>
    )
}
