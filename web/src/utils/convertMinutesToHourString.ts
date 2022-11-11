export function convertMinutesToHourString(minutesAmount: number = 0) {
    const hours = Math.floor(minutesAmount / 60)
    const minutes = minutesAmount % 60

    return `${hours} h ${minutes} min`
}
