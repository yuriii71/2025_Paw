import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { Home } from './app/Home';
import { config } from './app/app.config.server';

const bootstrap = (context: BootstrapContext) =>
    bootstrapApplication(Home, config, context);

export default bootstrap;
