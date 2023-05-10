import fs from 'fs/promises';
import { Config } from '../types/Core';

export async function getConfig(path: string, overwrites?: Config): Promise<Required<Config>> {
    const rawFile = await fs.readFile(path);
    let configFile = JSON.parse(rawFile.toString());

    if (!(configFile satisfies Config)) {
        throw new Error();
    }

    configFile = { ...configFile, overwrites };

    return configFile;
}
