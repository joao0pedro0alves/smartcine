import {THEMOVIEDB_PROFILE_URL} from "../config/themoviedb"

export function getGravatarUrl(avatarPath: string | null) {
    // return `https://secure.gravatar.com/avatar/${avatarPath}?s=64`
    return THEMOVIEDB_PROFILE_URL + avatarPath
}
