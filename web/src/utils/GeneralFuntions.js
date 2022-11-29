export const TabTitle = (newTitle) => {
    return document.title = newTitle;
}

export const setIcon = (newIcon) => {
    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = newIcon;
}
