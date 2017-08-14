
export const slider = (startVal) => {
    return `<input type="range" id="timeRange" value="${startVal}">`
}

export const mapTemplate = (slideVal) => {
    return `<div>map will be taking in the slider val somehow i guess: ${slideVal}</div>`
}