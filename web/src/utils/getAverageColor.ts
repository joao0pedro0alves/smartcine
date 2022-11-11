export function getAverageColor(average: number = 0) {
    if (average > 5 && average < 7) return 'bg-yellow-600'
    else if (average >= 7) return 'bg-green-600'
    else return 'bg-red-600'
}
