import { IPackageJson } from '@ts-type/package-dts';
import { PathLike } from 'fs';
export declare type Package = IPackageJson;
export declare type FilePath = PathLike | number;
export declare type FileOptions = string | undefined | null | {
    encoding?: string | null;
    flag?: string;
};
export declare function readPackageSync(path?: FilePath): Package;
export declare function readPackage(path?: FilePath): Promise<Package>;
