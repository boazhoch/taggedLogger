"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const entity_resolver_1 = require("./entity-resolver");
function makeIndex(getId, source) {
    const wrappedGet = (0, entity_resolver_1.getIdWrapper)(getId);
    const storage = new Map();
    const api = {
        add(entity) {
            storage.set(wrappedGet(entity), entity);
        },
        has(entity) {
            return storage.has(wrappedGet(entity));
        },
        hasId(id) {
            return storage.has((0, entity_resolver_1.normalizeId)(id));
        },
        get(id) {
            var _a;
            return (_a = storage.get((0, entity_resolver_1.normalizeId)(id))) !== null && _a !== void 0 ? _a : null;
        },
        getAll() {
            return [...storage.values()];
        },
        remove(entity) {
            storage.delete(wrappedGet(entity));
        },
        removeById(id) {
            storage.delete((0, entity_resolver_1.normalizeId)(id));
        },
    };
    for (const item of source !== null && source !== void 0 ? source : []) {
        api.add(item);
    }
    return api;
}
exports.default = makeIndex;
//# sourceMappingURL=indexer.js.map