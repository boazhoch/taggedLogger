"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const generator_1 = __importDefault(require("@statoscope/stats-extension-package-info/dist/generator"));
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { author, homepage, name, version, description } = require('../package.json');
const pluginName = `${name}@${version}`;
class WebpackCompressedExtension {
    constructor() {
        this.descriptor = { name, version, author, homepage, description };
        this.generator = new generator_1.default(this.descriptor);
    }
    getExtension() {
        return this.generator.get();
    }
    handleCompiler(compiler, context) {
        var _a, _b;
        // @ts-ignore
        context !== null && context !== void 0 ? context : (context = (_b = (_a = compiler.options.stats) === null || _a === void 0 ? void 0 : _a.context) !== null && _b !== void 0 ? _b : compiler.context);
        compiler.hooks.compilation.tap(pluginName, (compilation) => {
            const items = [];
            compilation.hooks.afterHash.tap(pluginName, () => {
                for (const item of items) {
                    this.generator.handleInstance(compilation.hash, item.packageName, item.instancePath, item.info);
                }
            });
            compilation.resolverFactory.hooks.resolver
                .for('normal')
                .tap(pluginName, (resolver) => {
                resolver.hooks.result.tap('MyPlugin', (result) => {
                    const pkg = result.descriptionFileData;
                    if (pkg && result.descriptionFileRoot) {
                        const instancePath = path_1.default.relative(context, result.descriptionFileRoot);
                        items.push({
                            packageName: pkg.name,
                            instancePath,
                            info: { version: pkg.version },
                        });
                        // webpack 4 uses absolute path for some modules
                        if (!compilation.chunkGraph && instancePath.match(/^\.\./)) {
                            items.push({
                                packageName: pkg.name,
                                instancePath: result.descriptionFileRoot,
                                info: { version: pkg.version },
                            });
                        }
                    }
                    return result;
                });
            });
        });
    }
}
exports.default = WebpackCompressedExtension;
//# sourceMappingURL=index.js.map