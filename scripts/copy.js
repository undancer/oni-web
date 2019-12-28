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

["elements", "buildings"].forEach(value => {
    let root = "/Users/undancer/oni";
    let assets = p.join(root, 'assets');
    let path = p.join(assets, value);

    let files = findFile(path);
    let targets = {};
    files.forEach(file => {
        let name = p.basename(file, '.png').toLowerCase();
        let value = p.relative(assets, file).toLowerCase();
        let target = p.join(__dirname, '../src', 'assets', 'images', value).toLowerCase();
        let targetDir = p.dirname(target).toLowerCase();

        if (!fs.existsSync(targetDir)) {
            fs.mkdirSync(targetDir, {recursive: true})
        }
        fs.copyFileSync(file, target);
        Object.assign(targets, {[name]: value});
    });

    let lines = [];

    Object.entries(targets).forEach(([key, value]) => {
        lines.push(`import _${key} from './${value}';`);
    });
    lines.push(`let ${value} = { ${Object.keys(targets).map(target => `${target}:_${target}`).join(',')} };`);
    lines.push(`export default ${value};`);
    let file = p.join(__dirname, '../src/assets', 'images', `${value}.ts`);
    fs.writeFileSync(file, lines.join('\n'));
    console.log(file);

});
