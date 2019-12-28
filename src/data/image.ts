import _elements_db from "../assets/images/elements";
import _buildings_db from "../assets/images/buildings";

let image = (name: string) => {
    let key = name.toLowerCase();
    let images = {};
    images = Object.assign(images, _elements_db);
    images = Object.assign(images, _buildings_db);
    // @ts-ignore
    return images[key];
};
export default image;
