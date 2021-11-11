"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const indexer_1 = __importDefault(require("@statoscope/helpers/dist/indexer"));
const makeAPI = (source) => {
    const packageIndexes = new Map();
    const instanceIndexes = new Map();
    for (const compilation of source.payload.compilations) {
        packageIndexes.set(compilation.id, (0, indexer_1.default)((r) => r.name, compilation.packages));
        for (const packageItem of compilation.packages) {
            instanceIndexes.set(packageItem, (0, indexer_1.default)((r) => r.path, packageItem.instances));
        }
    }
    return {
        getPackage(compilationId, packageId) {
            var _a, _b;
            return (_b = (_a = packageIndexes.get(compilationId)) === null || _a === void 0 ? void 0 : _a.get(packageId)) !== null && _b !== void 0 ? _b : null;
        },
        getInstance(compilationId, packageId, instancePath) {
            var _a, _b, _c, _d;
            const resolvedPackage = (_b = (_a = packageIndexes.get(compilationId)) === null || _a === void 0 ? void 0 : _a.get(packageId)) !== null && _b !== void 0 ? _b : null;
            if (!resolvedPackage) {
                return null;
            }
            return (_d = (_c = instanceIndexes.get(resolvedPackage)) === null || _c === void 0 ? void 0 : _c.get(instancePath)) !== null && _d !== void 0 ? _d : null;
        },
    };
};
exports.default = makeAPI;
//# sourceMappingURL=api.js.map