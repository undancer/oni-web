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

["elements","buildings"].forEach(value => {
    let path = "/Users/undancer/oni/assets/" + value;
    let save = p.join(__dirname, "../src/image/" + value);

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
        lines.push(`import _${target} from './${value}/${target}.png';`);
    });
    lines.push(`let ${value} = { ${targets.map(target => `${target}:_${target}`).join(',')} };`);
    lines.push(`export default ${value};`);
    let file = p.join(save, `../${value}.ts`);
    fs.writeFileSync(file, lines.join('\n'));
    console.log(file);

});
