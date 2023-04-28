import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {sceptreShellRoutes} from "./sceptre-shell.routes";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(sceptreShellRoutes, {
        scrollPositionRestoration: 'top'
      }
    )
  ],
})
export class SceptreShellModule {
}
