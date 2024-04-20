import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { Serifs, ThemeService, Themes } from '../services/theme.service'

// TODO: Get light/dark icons to click on and change the light dark modes of your computer.

/**
 * The main application component.
 */
@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, CommonModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    title = 'professional-website'
    themeService = inject(ThemeService)

    /**
     * Determines whether the current theme mode is set to 'dark'.
     * @returns `true` if the current theme mode is 'dark', `false` otherwise.
     */
    get isDarkMode(): boolean {
        return this.themeService.themeMode() === 'dark'
    }

    /**
     * Gets the current theme mode.
     * @returns The current theme mode.
     */
    get themeMode(): string {
        return this.themeService.themeMode()
    }

    /**
     * Handles the theme selection change event on light/dark mode.
     */
    onThemeModeChange() {
        this.themeService.toggleThemeMode()
    }

    /**
     * Handles the serif selection change event in the drop down menu.
     * @param event
     */
    onSerifSelectionChange(event: Event): void {
        if (!event || event instanceof Event !== true) {
            console.error('Unable to process event in app.component.onSerifSelectionChange() with event given: ', event)
            return
        }

        const value = (event.target as HTMLSelectElement)?.value as Serifs

        if (!value) {
            console.error(
                'Unable to process serif value in app.component.onSerifSelectionChange() with value given: ',
                value
            )
            return
        }

        this.themeService.setSerif(value)
    }

    /**
     * Handles the theme selection change event in the drop down menu.
     * @param event
     */
    onThemeSelectionChange(event: Event): void {
        if (!event || event instanceof Event !== true) {
            console.error('Unable to process event in app.component.onThemeSelectionChange() with event given: ', event)
            return
        }

        const value = (event.target as HTMLSelectElement)?.value

        if (!value) {
            console.error(
                'Unable to process theme value in app.component.onThemeSelectionChange() with value given: ',
                value
            )
            return
        }

        this.themeService.setTheme(value as Themes)
    }
}
