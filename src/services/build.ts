import { Builder } from '../core';
import { getConfig } from '../core/config';

export async function build(entry: string, options: BuildServiceOptions) {
    const config = await getConfig(options.configPath);

    const builder = new Builder(config.esbuild);

    await builder.build();
    return 0;
}
