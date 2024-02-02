import webpackConfig from './config/webpackConfig.mjs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
	trailingSlash: true,
	sassOptions: {
		includePaths: [path.join(__dirname, 'src', 'app', 'styles')],
		prependData: `
				@import 'variables/scss-var';
				@import 'functions';
			`,
	},
	webpack: (config) => webpackConfig(config),
};

export default nextConfig;
