import { Builder, Watcher } from '../core';
import { getConfig } from '../core/config';

export async function watch(options: WatchServiceOptions) {
    const config = await getConfig(options.configPath);

    const builder = new Builder(config.esbuild);
    const watcher = new Watcher(config.entry);

    const context = await builder.getContext();

    watcher.on('ready', () => {});
    watcher.on('close', () => {});

    watcher.on('change', () => {
        context.rebuild();
    });
}
