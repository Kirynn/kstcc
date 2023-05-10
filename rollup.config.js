import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default {
    input: './src/index.ts',
    output: [
        {
            file: './dist/index.js',
            format: 'es'
        },
        {
            file: './dist/index.cjs',
            format: 'cjs',
            exports: 'named'
        }
    ],
    plugins: [
        nodeResolve({
            extensions: ['.ts', '.js', '.json']
        }),
        typescript()
    ]
};
