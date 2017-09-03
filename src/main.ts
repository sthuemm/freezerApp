import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { setBaseUrlProd} from './credentials/credentials';

if (environment.production) {
  enableProdMode();
  setBaseUrlProd();
}

platformBrowserDynamic().bootstrapModule(AppModule);
