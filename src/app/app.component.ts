import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { DevMenuComponent } from '../components/dev-menu/dev-menu.component'

// TODO: Get light/dark icons to click on and change the light dark modes of your computer.

/**
 * The main application component.
 */
@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, CommonModule, DevMenuComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    title = 'professional-website'
    constructor() {}
}
