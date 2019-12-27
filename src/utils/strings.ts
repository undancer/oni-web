export const fix = (value: string = "") => {
    return value
        .replace(/<link=".*">/g, '')
        .replace(/<\/link>/g, '')
};
