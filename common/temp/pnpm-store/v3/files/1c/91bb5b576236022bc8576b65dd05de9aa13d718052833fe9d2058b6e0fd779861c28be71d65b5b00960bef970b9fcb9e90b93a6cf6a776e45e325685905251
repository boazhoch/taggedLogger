/// <reference types="node" />
import { PassThrough, Readable } from 'stream';
export declare type InitArg = {
    id: string;
    data: unknown;
}[];
export declare type ScriptItem = {
    type: 'path';
    path: string;
} | {
    type: 'raw';
    content: string;
};
export declare type Options = {
    scripts: Array<ScriptItem | string>;
    init: string | ((data: InitArg) => void);
    jsonExtAPIName?: string;
};
export default class HTMLWriter {
    options: Options;
    chunkWriters: Array<{
        id: string;
        stream: Readable;
    }>;
    stream: PassThrough;
    constructor(options: Options);
    getStream(): Readable;
    write(): Promise<void>;
    addChunkWriter(source: Readable, id: string): void;
}
