import { APIFactory } from '@statoscope/extensions';
import { Format, Package, Instance } from './generator';
export declare type API = {
    getPackage: (compilationId: string, packageName: string) => Package | null;
    getInstance: (compilationId: string, packageName: string, instancePath: string) => Instance | null;
};
declare const makeAPI: APIFactory<Format, API>;
export default makeAPI;
