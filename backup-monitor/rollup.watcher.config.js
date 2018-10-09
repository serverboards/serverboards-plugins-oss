import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/watcher.js',
  format: 'iife',
  plugins: [ babel() ],
  dest: 'static/watcher.js',
  sourceMap: true
};
