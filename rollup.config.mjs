import { terser } from "rollup-plugin-terser";

export default {
	input: 'lib/papaparse.mjs',
	output: [
		{
			name: 'Papa',
			file: 'lib/papaparse.umd.js',
			format: 'umd'
		},
		{
			name: 'Papa',
			file: 'lib/papaparse.umd.min.js',
			format: 'umd',
			plugins: [terser()]
		}
	],
	plugins: [
		{
			resolveImportMeta(prop, { format }) {
				if (prop === 'url' && format === 'umd') {
					return 'global && global.document && global.document.currentScript && global.document.currentScript.src';
				}
			}
		}
	]
};
