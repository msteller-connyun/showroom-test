import resolve from 'rollup-plugin-node-resolve';

export default {
    input: 'src/main.js',
    output: {
        file: 'dist/bundle.js',
        format: 'umd'
    },
    name: 'MyModule',
    plugins: [
        resolve({
            browser: true,
        })
    ]
};