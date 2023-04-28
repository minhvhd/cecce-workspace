import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {loginShellRoutes} from "./login-shell.routes";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from '@ngrx/effects'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(loginShellRoutes, {
      scrollPositionRestoration: 'top'
    }),
    StoreModule.forRoot(),
    EffectsModule.forRoot([])
  ],
})
export class LoginShellModule {
}
