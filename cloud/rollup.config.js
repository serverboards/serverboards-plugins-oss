import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/index.js',
  output: {
    format: 'umd',
    file: 'static/node_list.js',
  },
  sourcemap: 'inline',
  plugins: [
    babel(),
    nodeResolve({})
  ],
};
