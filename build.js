import fs from 'fs-extra';
import path from 'path';
import sass from 'sass';
import less from 'less';
import cssnano from 'cssnano';

const sassHandler = (input) => {
  const result = sass.renderSync({ data: input });
  return result.css.toString();
};

const lessHandler = async (input) => {
  const { css } = await less.render(input);
  return css;
};

const handlerMap = {
  css: (input) => input,
  sass: sassHandler,
  scss: sassHandler,
  less: lessHandler,
};

const exts = Object.keys(handlerMap);

(async function main() {
  const keys = fs.readdirSync(path.resolve(__dirname, 'themes'));
  const result = {};

  for (let key of keys) {
    for (let ext of exts) {
      const file = path.resolve(__dirname, 'themes', key, 'index.' + ext);
      // console.log(file);

      if (!fs.existsSync(file)) continue;

      const css = await handlerMap[ext](fs.readFileSync(file, 'utf-8'));
      // console.log(css);
      const { css: minifedCss } = await cssnano.process(css);

      result[key] = minifedCss;
    }
  }

  fs.ensureDirSync(path.resolve(__dirname, 'dist'));
  fs.writeFileSync(
    path.resolve(__dirname, 'dist/index.js'),
    'module.exports=' + JSON.stringify(result, null, 2)
  );
})();
