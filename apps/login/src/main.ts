import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import {LoginShellModule} from "@libs/login/feature";
import { importProvidersFrom } from "@angular/core";

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      LoginShellModule
    )
  ],
}).catch((err) => console.error(err));
