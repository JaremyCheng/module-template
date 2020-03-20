import path from 'path';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const production = !process.env.ROLLUP_WATCH;
const sourcemap = !!process.env.sourcemap;
const compress = !!process.env.compress;
const resolvePath = (p) => path.resolve(__dirname, p);
const pkg = require(resolvePath(`package.json`));

export default {
  input: 'src/index.ts',
  output: [
    {
      sourcemap: sourcemap,
      file: pkg.module,
      format: 'esm'
    },
    {
      sourcemap: sourcemap,
      file: pkg.main,
      format: 'cjs'
    },
    {
      sourcemap: sourcemap,
      file: pkg.umd,
      format: 'umd',
      name: pkg.name
    }
  ],
  cache: !production,
  plugins: [
    commonjs(),
    resolve(),
    typescript(),
    // 压缩
    compress && terser()
  ]
};
