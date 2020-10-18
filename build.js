import fs from 'fs-extra';
import path from 'path';
import sass from 'sass';
import less from 'less';
import cssnano from 'cssnano';
import themes from './themes';

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

(async function main() {
  const result = {};

  fs.ensureDirSync(path.resolve(__dirname, 'dist'));

  for (let [key, p] of Object.entries(themes)) {
    const file = path.resolve(__dirname, 'themes', key, p);

    const ext = path.extname(file).slice(1);
    const css = await handlerMap[ext](fs.readFileSync(file, 'utf-8'));
    const { css: minifedCss } = await cssnano.process(css);

    // write css
    fs.writeFileSync(path.resolve(__dirname, 'dist', key + '.css'), minifedCss);

    result[key] = minifedCss;
  }

  // write js
  fs.writeFileSync(
    path.resolve(__dirname, 'dist/index.js'),
    'module.exports=' + JSON.stringify(result, null, 2)
  );
})();
