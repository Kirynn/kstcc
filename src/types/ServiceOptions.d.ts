type FilesTypes = 'es' | 'cjs' | 'umd' | 'amd';
type BuildTargetType =
    | 'chrome'
    | 'deno'
    | 'edge'
    | 'firefox'
    | 'hermes'
    | 'ie'
    | 'ios'
    | 'node'
    | 'opera'
    | 'rhino'
    | 'safari';

interface CommonServiceOptions {
    configPath: string;
}

interface BuildServiceOptions extends CommonServiceOptions {
    output: string;
    types: FilesTypes[];
    target: BuildTargetType | BuildTargetType[];
}

interface WatchServiceOptions extends CommonServiceOptions {}
