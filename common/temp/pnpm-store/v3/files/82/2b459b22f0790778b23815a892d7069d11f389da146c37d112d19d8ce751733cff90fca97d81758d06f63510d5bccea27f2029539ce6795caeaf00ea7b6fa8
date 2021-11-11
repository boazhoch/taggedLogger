import { GetIDFn } from './entity-resolver';
export declare type IndexAPI<TID, TEntity> = {
    add(entity: TEntity): void;
    has(entity: TEntity): boolean;
    hasId(id: TID): boolean;
    get(id: TID): TEntity | null;
    getAll(): TEntity[];
    remove(entity: TEntity): void;
    removeById(id: TID): void;
};
export default function makeIndex<TEntity, TID>(getId: GetIDFn<TID, TEntity>, source?: TEntity[]): IndexAPI<TID, TEntity>;
