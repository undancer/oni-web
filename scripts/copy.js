const fs = require('fs');
const p = require('path');

let findFile = (root, ext = '.png') => {
    let list = [];
    let stat = fs.lstatSync(root);
    if (!stat.isDirectory()) {
        if (p.extname(root) === ext) {
            list.push(root);
        }
    } else {
        list = list.concat(
            fs.readdirSync(root).flatMap(file =>
                findFile([root, file].join('/'))
            )
        );
    }
    return list;
};

let path = "/Users/undancer/oni/assets/elements";
let save = p.join(__dirname, "../src/image/elements");
if (!fs.existsSync(save)) {
    fs.mkdirSync(save, {recursive: true})
}
let files = findFile(path);
let targets = [];
files.forEach(file => {
    let name = p.basename(file, '.png').toLowerCase();
    let target = p.join(save, name + '.png');
    fs.copyFileSync(file, target);
    targets.push(name);
});

let lines = [];

targets.forEach(target => {
    lines.push(`import ${target} from './elements/${target}.png';`);
});
lines.push(`let elements = { ${targets.join(',')} };`);
lines.push(`export default elements;`);
let file = p.join(save, '../elements.ts');
fs.writeFileSync(file, lines.join('\n'));
console.log(file);
