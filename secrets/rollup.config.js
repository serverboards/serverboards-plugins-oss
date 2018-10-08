import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';

export default {
  input: 'src/screen.js',
  output: {
    format: 'umd',
    file: 'static/screen.js',
  },
  plugins: [
    babel(),
    nodeResolve(),
    uglify()
   ],
};
