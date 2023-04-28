import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {loginShellRoutes} from "./login-shell.routes";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(loginShellRoutes, {
      scrollPositionRestoration: 'top'
    })
  ],
})
export class LoginShellModule {}
