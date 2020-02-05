import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/main.js',
  output: {
    file: 'peaks.js',
    format: 'iife',
    name: 'peaks',
    sourcemap: true
  },
  plugins: [
    resolve(),
    commonjs({
      include: 'node_modules/**'
    })
  ]
};
