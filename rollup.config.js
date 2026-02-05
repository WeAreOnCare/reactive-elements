const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const babel = require('@rollup/plugin-babel');
const terser = require('@rollup/plugin-terser');
const pkg = require('./package.json');

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
};
module.exports = {
  input: 'src/reactive-elements.js',
  external: ['react', 'react-dom'],
  output: [
    {
      format: 'cjs',
      sourcemap: true,
      file: pkg.main,
      globals,
    },
    {
      format: 'esm',
      sourcemap: true,
      file: pkg.module,
      globals,
    },
    {
      format: 'iife',
      name: 'ReactiveElements',
      sourcemap: true,
      file: 'dist/reactive-elements.iife.js',
      globals,
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel({ babelHelpers: 'bundled' }),
    terser(),
  ],
};
