import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/screen.js',
  format: 'iife',
  plugins: [ babel() ],
  dest: 'static/screen.js',
  sourceMap: true
};
