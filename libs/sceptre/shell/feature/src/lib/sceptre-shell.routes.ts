import {Routes} from "@angular/router";
import {LayoutComponent} from "@libs/sceptre/shell/ui/layout";

export const sceptreShellRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [

    ]
  }
]
