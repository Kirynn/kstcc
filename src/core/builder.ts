import * as esbuild from 'esbuild';
import { IBuildContext } from '../types/Core';

const DEFAULT_BUILD_CONFIG = {};

export class Builder {
    private config: esbuild.BuildOptions;

    constructor(config?: esbuild.BuildOptions) {
        this.config = { ...DEFAULT_BUILD_CONFIG, ...config };
    }

    public build() {
        return esbuild.build(this.config);
    }

    public async getContext() {
        const context = new BuildContext(this.config);
        return await context.__init();
    }
}

class BuildContext implements IBuildContext {
    public context: esbuild.BuildContext<esbuild.BuildOptions> | undefined;
    public isLoading = false;

    constructor(private config: esbuild.BuildOptions) {}

    public async cancel() {
        if (!this.context) {
            throw new Error('Context is already initlized');
        }
        if (this.isLoading) {
            await this.context?.cancel();
        }
    }

    public async __init() {
        if (this.context) {
            throw new Error('Context is already initlized');
        }
        this.context = await esbuild.context(this.config);
        return this;
    }

    public async rebuild() {
        await this.cancel();
        return this.context!.rebuild();
    }

    public async dispose() {
        await this.cancel();
        await this.context!.dispose();
    }
}
