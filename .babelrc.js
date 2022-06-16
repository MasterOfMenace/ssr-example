const presets = [
  '@babel/preset-react',
  '@babel/preset-typescript',
  [
    '@babel/preset-env',
    {
      targets: 'defaults',
    },
  ],
];
const plugins = ['@babel/transform-runtime'];

module.exports = {presets, plugins};
