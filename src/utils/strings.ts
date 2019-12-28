export const fix = (value: string = "") => {
    return value
        .replace(/<link=".*?">/g, '')
        .replace(/<\/link>/g, '')
        .replace(/<color=\\(.*?)>/g, '<span style="color:$1">')
        .replace(/<\/color>/g, '</span>')
};
