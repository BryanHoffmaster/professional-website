import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component } from '@angular/core'
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router'

@Component({
    selector: 'app-header-menu',
    standalone: true,
    imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
    templateUrl: './header-menu.component.html',
    styleUrl: './header-menu.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderMenuComponent {}
