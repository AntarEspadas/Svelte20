import packageJson from './package.json' assert { type: 'json' };
import sheetOverrides from './build/sheet.overrides.json' assert { type: 'json' };
import fs from 'fs';
import path from 'path';
import glob from 'glob';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const outDir = path.join(__dirname, 'sheet');

const name = packageJson.name ?? 'sheet';
const author = packageJson.author;

const index = 'index.html';

if (fs.existsSync(outDir)) fs.rmSync(outDir, { recursive: true, force: true });

fs.mkdirSync(outDir);

const files = glob.sync(path.join(__dirname, 'build/*'));

for (const file of files) {
	if (fs.lstatSync(file).isDirectory()) continue;
	const baseName = path.basename(file);
	if (['manifest.json', 'sheet.overrides.json', 'instructions.md'].indexOf(baseName) != -1)
		continue;
	fs.copyFileSync(file, path.join(outDir, baseName));
}

let instructions = '';
try {
	instructions = fs.readFileSync(path.join(__dirname, 'build/instructions.md')).toString();
} catch {}

const sheetJson = {
	html: `${name}.html`,
	css: `${name}.css`,
	authors: author,
	roll20userid: '1',
	preview: 'preview.png',
	instructions,
	legacy: false,
	...sheetOverrides
};

fs.writeFileSync(path.join(outDir, 'sheet.json'), JSON.stringify(sheetJson, undefined, 4));

const indexHtml = fs.readFileSync(path.join(outDir, index)).toString();
const indexSplit = indexHtml.split('<script type="module"');
indexSplit[indexSplit.length - 1] = '';
fs.writeFileSync(path.join(outDir, index), indexSplit.join(''));
fs.renameSync(path.join(outDir, index), path.join(outDir, sheetJson.html));

const css = glob.sync(path.join(__dirname, 'build/_app/immutable/assets/*.css'));
for (const file of css) {
	fs.copyFileSync(file, path.join(outDir, sheetJson.css));
	break;
}
