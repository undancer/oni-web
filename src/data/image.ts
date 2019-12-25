import db from "../image/elements";

let image = (name: string) => {
    let key = name.toLowerCase();
    // @ts-ignore
    return db[key];
};
export default image;
