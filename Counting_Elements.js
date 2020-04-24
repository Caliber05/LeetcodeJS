countElements = (arr) => {
    const seen = new Set(arr)
    return arr.reduce((acc, cur) => seen.has(cur + 1) ? acc + 1 : acc, 0)
}
