export function trimText(text) {
    if (text && text.length > 200) {
        return text.substring(0, 200) + "...";
    }
    return text;
}

export function getText(text) {
    return text?.replace(/<[^>]+>/g, "") || "";
}