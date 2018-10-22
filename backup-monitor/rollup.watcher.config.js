import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  entry: 'src/watcher.js',
  format: 'umd',
  plugins: [
    babel(),
    nodeResolve({})
  ],
  dest: 'static/watcher.js',
  sourceMap: true
};
