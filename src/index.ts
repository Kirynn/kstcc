import { cac } from 'cac';
import { build, watch } from './services';

const cli = cac('kstcc');

const DEFAULT_CONFIG = { default: './kstcc.config.json' };

cli.command('').action(cli.outputHelp);

cli.command('build <entry>', 'Build application')
    .option('--output <file>', 'Output file')
    .option('--config <file>', 'Config File', DEFAULT_CONFIG)
    .action(build);

cli.command('watch', 'Watch and rebuild on changes')
    .option('--config <file>', 'Config File', DEFAULT_CONFIG)
    .action(watch);

cli.help();
cli.parse();
cli.version('1.0.0-alpha');
