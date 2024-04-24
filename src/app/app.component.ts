import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { DevMenuComponent } from '../components/dev-menu/dev-menu.component'
import { HeaderMenuComponent } from '../components/header-menu/header-menu.component'

/**
 * The main application component.
 */
@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, CommonModule, DevMenuComponent, HeaderMenuComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    title = 'professional-website'
    constructor() {}
}
