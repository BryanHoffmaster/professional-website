import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  standalone: true,
  imports: [],
  templateUrl: './header-menu.component.html',
  styleUrl: './header-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderMenuComponent {

}
