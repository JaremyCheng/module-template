import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/index.ts',
  output: {
    sourcemap: !production,
    file: 'dist/index.js',
    format: 'esm'
  },
  cache: !production,
  plugins: [
    typescript(),
    // 压缩
    production && terser()
  ]
};
