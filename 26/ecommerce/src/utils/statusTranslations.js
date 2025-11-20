export const statusData = [
    "AVAILABLE",
    "OUT_OF_STOCK",
    "DISCONTINUED"
]

export const statusTranslations = {
    "AVAILABLE": "Disponible",
    "OUT_OF_STOCK": "Sin Stock",
    "DISCONTINUED": "Descontinuado"
}

export const translateStatus = (status) => {
    // el OR no seria necesario pero lo colocamos por las dudas
    // por error podria quedar undefined
    return statusTranslations[status] || status
}