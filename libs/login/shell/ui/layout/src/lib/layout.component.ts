import {Component} from "@angular/core";
import {CommonModule} from "@angular/common";

@Component({
  standalone: true,
  selector: `login-layout`,
  imports: [CommonModule],
  template: `
    <span class="text-blue-500">login layout work</span>
  `
})
export class LayoutComponent {}
