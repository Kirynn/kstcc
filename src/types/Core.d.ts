import * as esbuild from 'esbuild';

type IBuildContext = {
    context: esbuild.BuildContext<esbuild.BuildOptions> | undefined;
    isLoading: boolean;

    cancel: () => Promise<void>;
    rebuild: () => Promise<esbuild.BuildResult<esbuild.BuildOptions>>;
    dispose: () => Promise<void>;
};

type Config = {
    entry: string | string[];
    esbuild?: esbuild.BuildOptions;
};
