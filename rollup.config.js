// rollup.config.js 
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

export default {
    input: 'engine/Game.js',
    output: {
        format: 'umd',
        file: 'engine.js',
        name: 'GameEngine',
    },
    watch: {
        exclude: ['node_modules/**'],
        include: ['engine/**'],
    },
    plugins: [livereload(), serve()],
};