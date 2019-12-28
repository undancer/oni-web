import _elements_db from "../image/elements";
import _buildings_db from "../image/buildings";

let image = (name: string) => {
    let key = name.toLowerCase();
    let images = {};
    images = Object.assign(images, _elements_db);
    images = Object.assign(images, _buildings_db);
    // @ts-ignore
    return images[key];
};
export default image;
