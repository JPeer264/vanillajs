import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: 'dest/cjs',
      format: 'cjs',
      sourcemap: true,
    },
    {
      dir: 'dest/es',
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [typescript()],
};
