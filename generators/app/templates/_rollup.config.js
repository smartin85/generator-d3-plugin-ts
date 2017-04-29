export default {
    entry: 'build/jsnext/index.js',
    targets: [
        { dest: 'build/<%= pluginName %>.js', format: 'umd' },
        { dest: 'example/<%= pluginName %>.js', format: 'umd' }
    ],
	moduleName: 'd3'
};