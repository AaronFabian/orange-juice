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
                    createdAt: new Date().toISOString(),
                    updatedAt: "",
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

export function handlePlayerReady(player) {
    player.on("ready", () => {
        console.log("player ready");
    });

    player.on("waiting", () => {
        console.log("video is ready to play");
    });

    player.on("dispose", () => {
        const minute = Math.floor(player.currentTime() / 60);
        const seconds = Math.floor(player.currentTime() % 60);
        console.log(`player stop at: ${minute}:${seconds}`);
    });

    player.on("ended", () => {
        console.log("Player finished");
    });

    player.on("error", () => {
        console.warn(player.error);
        //Gives MEDIA_ERR_SRC_NOT_SUPPORTED error
    });
}

export function timeSince(date) {
    const seconds = Math.floor((new Date() - date) / 1000);

    let interval = seconds / 31536000;
    if (interval > 1) return Math.floor(interval) + " years";

    interval = seconds / 2592000;
    if (interval > 1) return Math.floor(interval) + " months";

    interval = seconds / 86400;
    if (interval > 1) return Math.floor(interval) + " days";

    interval = seconds / 3600;
    if (interval > 1) return Math.floor(interval) + " hours";

    interval = seconds / 60;
    if (interval > 1) return Math.floor(interval) + " minutes";

    return Math.floor(seconds) + " seconds";
}
