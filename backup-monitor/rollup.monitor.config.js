import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  entry: 'src/monitor.js',
  format: 'umd',
  plugins: [
    babel(),
    nodeResolve({})
  ],
  dest: 'static/monitor.js',
  sourceMap: true
};
