import { Component, ElementRef, ViewChild, inject } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { ThemeService, Themes } from '../../services/theme.service'

/**
 * A handy developer component that will display a floating menu on top of your app
 * that can allow you to easily change the themes, fonts, and more.
 */
@Component({
    selector: 'dev-menu',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './dev-menu.component.html',
    styleUrl: './dev-menu.component.scss',
})
export class DevMenuComponent {
    title = 'Dev Menu'
    themeService = inject(ThemeService)

    @ViewChild('mainContainer', {read: ElementRef, static: true }) mainContainer: ElementRef | undefined

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

    // TODO: do I want to add type arguments to this?
    mainForm: FormGroup = new FormGroup({
        // Setup the *initial* values
        themeMode: new FormControl(this.isDarkMode),
        themes: new FormControl(this.themeService.theme()),
        font: new FormControl(this.themeService.font()),
    })

    constructor() {}

    onDevMenuToggle() {
        this.mainContainer?.nativeElement.classList.toggle('open') ?? console.error('Unable to find mainContainer element')
    }


    /**
     * Handles the theme selection change event on light/dark mode.
     */
    onThemeModeChange() {
        this.themeService.toggleThemeMode()
    }

    /**
     * Handles the font selection change event in the drop down menu.
     * @param event
     */
    onFontSelectionChange(event: Event): void {
        if (!event || event instanceof Event !== true) {
            console.error('Unable to process event in app.component.onFontSelectionChange() with event given: ', event)
            return
        }

        const value = (event.target as HTMLSelectElement)?.value as string
        if (!value) {
            console.error('Unable to process font value in app.component.onFontSelectionChange() with value given: ', value)
            return
        }
        this.themeService.setFont(value)
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
