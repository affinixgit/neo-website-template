export function trimText(text) {
    if (text && text.length > 200) {
        return text.substring(0, 200) + "...";
    }
    return text;
}

export function getText(text) {
    return text?.replace(/<[^>]+>/g, "") || "";
}

export function generateBreadcrumbSchema(breadcrumbs) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((breadcrumb, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": breadcrumb.name,
            "item": breadcrumb.url || "", // Use empty string if no URL
        })),
    };
}