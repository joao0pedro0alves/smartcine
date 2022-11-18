import {useState, useEffect} from "react"
import {View} from "react-native"
import Toast from "react-native-toast-message"

import api from "../../services/api"

import {WatchProvider} from "../WatchProvider"

import {styles} from "./styles"

export interface Provider {
    display_priority: number
    logo_path: string
    provider_id: number
    provider_name: string
}

interface Country {
    link: string
    rent: Provider[]
    buy: Provider[]
    flatrate: Provider[]
}

interface InWatchProviders {
    id: number
    results: Record<"BR", Country>
}

interface WatchProvidersProps {
    movieId: string
}

export function WatchProviders({movieId}: WatchProvidersProps) {
    const [watchProviders, setWatchProviders] = useState<InWatchProviders>(
        {} as InWatchProviders
    )

    async function fetchWatchProviders() {
        try {
            const response = await api.get(`movie/${movieId}/watch/providers`)
            setWatchProviders(response.data)
        } catch (error) {
            Toast.show({
                type: "error",
                text1: "Opa!",
                text2: "Não foi possível buscar os provedores",
            })

            throw error
        }
    }

    useEffect(() => {
        fetchWatchProviders()
    }, [movieId])

    return (
        <View style={styles.container}>
            <WatchProvider
                title="Stream"
                data={watchProviders.results?.BR?.flatrate}
            />

            <WatchProvider
                title="Alugar"
                data={watchProviders.results?.BR?.rent}
            />

            <WatchProvider
                title="Comprar"
                data={watchProviders.results?.BR?.buy}
            />
        </View>
    )
}
