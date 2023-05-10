import chokidar from 'chokidar';
import { Stats } from 'fs';
import EventEmitter from 'events';

export class Watcher extends EventEmitter {
    private watcher;

    constructor(paths: string | string[], options?: chokidar.WatchOptions) {
        super();
        const watcher = chokidar.watch(paths, options);

        watcher.on('ready', () => {
            this.emit('ready');
        });

        watcher.on('change', async (path: string, stats?: Stats) => {
            this.emit(path, stats);
        });

        this.watcher = watcher;
    }

    public async close() {
        await this.watcher.close();
        this.emit('close');
    }
}
