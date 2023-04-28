import {Routes} from "@angular/router";
import {LoginLayoutComponent} from "@libs/login/shell/ui/layout";

export const loginShellRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginLayoutComponent
  }
]
