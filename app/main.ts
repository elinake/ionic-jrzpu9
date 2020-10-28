import "./polyfills";

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app.module";

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  // tslint:disable-next-line
  .catch(err => console.log(err));
