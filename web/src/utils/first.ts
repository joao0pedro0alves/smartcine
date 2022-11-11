export function first<T>(arr: T[], amount: number = 1): T[] {
    return arr.slice(0, amount)
}
