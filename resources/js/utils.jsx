export function convertISODate(date) {
    return new Date(date)
        .toLocaleDateString(navigator.language, {
            month: "long",
            day: "numeric",
            year: "numeric",
        })
        .split(" ");
}
