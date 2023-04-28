import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {sceptreShellRoutes} from "./sceptre-shell.routes";
import {LoginEffect, loginReducer, loginReducerKey} from "@libs/sceptre/login/data-access";
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";

const rootReducers = {
  [loginReducerKey]: loginReducer
};

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(sceptreShellRoutes, {
        scrollPositionRestoration: 'top'
      }
    ),
    StoreModule.forRoot(rootReducers),
    EffectsModule.forRoot([LoginEffect])
  ],
})
export class SceptreShellModule {
}
