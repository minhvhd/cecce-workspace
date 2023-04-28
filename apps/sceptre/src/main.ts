import {bootstrapApplication} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import {importProvidersFrom} from "@angular/core";
import {SceptreShellModule} from "@libs/sceptre/feature";

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      SceptreShellModule
    )
  ],
}).catch((err) => console.error(err));
