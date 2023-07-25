export const orangeJuice = "orange-juice";

export const URL_ANIME_STREAMING_LINK =
    "https://api.consumet.org/anime/gogoanime/watch";

export const URL_ANIME_DETAIL = "https://api.consumet.org/anime/gogoanime/info";

export function convertISODate(date) {
    return new Date(date)
        .toLocaleDateString(navigator.language, {
            month: "long",
            day: "numeric",
            year: "numeric",
        })
        .split(" ");
}

export function getHistory() {
    return JSON.parse(localStorage.getItem(orangeJuice));
}

export function overWriteHistory(animeId, lastEpsNumber, lastEpsUrl) {
    const history = JSON.parse(localStorage.getItem(orangeJuice));
    localStorage.setItem(
        orangeJuice,
        JSON.stringify({
            ...history,
            animes: {
                ...history.animes,
                [animeId]: {
                    ...history.animes[animeId],
                    lastEps: lastEpsNumber,
                    url: lastEpsUrl,
                    updatedAt: new Date().toISOString(),
                },
            },
        })
    );
}

export function addNewAnimeHistory(history, animeId, title, image) {
    localStorage.setItem(
        orangeJuice,
        JSON.stringify({
            ...history,
            animes: {
                ...history.animes,
                [animeId]: {
                    id: animeId,
                    lastEps: null,
                    url: "",
                    title: title,
                    image: image,
                    created_at: new Date().toISOString(),
                    updated_at: "",
                },
            },
        })
    );
}

export function generateHistory(animeId, title, image) {
    localStorage.setItem(
        orangeJuice,
        JSON.stringify({
            animes: {
                [animeId]: {
                    id: animeId,
                    lastEps: null,
                    url: "",
                    title: title,
                    image: image,
                    createdAt: new Date().toISOString(),
                    updatedAt: "",
                },
            },
        })
    );
}
