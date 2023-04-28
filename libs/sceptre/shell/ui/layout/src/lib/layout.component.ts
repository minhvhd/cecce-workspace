import {ChangeDetectionStrategy, Component} from "@angular/core";
import {RouterOutlet} from "@angular/router";

@Component({
  standalone: true,
  selector: 'sceptre-layout',
  template: `
    sceptre layout work
  `,
  imports: [RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {}
