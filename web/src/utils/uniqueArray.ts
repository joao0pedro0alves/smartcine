export function uniqueArray<T>(anyList: T[]): T[] {

    return anyList.filter((value, index) => {
        const _value = JSON.stringify(value)

        return (
            index ===
            anyList.findIndex((obj) => {
                return JSON.stringify(obj) === _value
            })
        )
    })
}
