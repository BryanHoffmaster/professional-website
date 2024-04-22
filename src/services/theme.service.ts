import { Injectable, WritableSignal, inject, signal } from '@angular/core'
import { toObservable } from '@angular/core/rxjs-interop'
import { Observable, Subscription } from 'rxjs'
import { FontService } from './font.service'

// TYPES PREAMBLE //

/** A list of font types that can be used in the application. */
const themeModes = ['light', 'dark'] as const
type ThemeModesTuple = typeof themeModes
export type ThemeModes = ThemeModesTuple[number]

/** A list of themes that can be used in the application. */
const themes = ['cool-kids', 'green-day', 'solarized', 'default'] as const
type ThemesTuple = typeof themes
export type Themes = ThemesTuple[number]

/**
 * Service that manages the application's theme.
 * NOTE: This service is used by directives to auto change the font type attribute(s)
 * on the body element.
 */
@Injectable({
    providedIn: 'root',
})
export class ThemeService {
    /** A static reference to the media query that determines if the user prefers light mode. */
    private readonly prefersLightScheme = '(prefers-color-scheme: light)'

    private fontService = inject(FontService)

    private _themeMode = signal<ThemeModes>('light')
    private _theme = signal<Themes>('default')
    private _font = signal<string>('Roboto') // NOTE: had to widen this because you can't add types at runtime!

    private signals: WritableSignal<any>[] = [this._themeMode, this._theme, this._font]

    // exposing local lists through service here:
    themes = themes
    themeModes = themeModes
    fonts = this.fontService.availableFonts()

    private observables: Observable<any>[] = []
    private subscriptions: Subscription[] = []

    /**
     * The current theme mode being used of type {@link ThemeModes}.
     */
    readonly themeMode = this._themeMode.asReadonly()
    readonly themeMode$ = toObservable(this._themeMode)

    /**
     * The current theme being used of type {@link Themes}.
     */
    readonly theme = this._theme.asReadonly()
    readonly theme$ = toObservable(this._theme)

    /**
     * The current font being used of type {@link Fonts}.
     */
    readonly font = this._font.asReadonly()
    readonly font$ = toObservable(this._font)

    constructor() {
        //  TODO: Does this run on window:load or after? Test this!
        this.checkWindowMode()
        this.buildObservables()
        this.setBodyAttributes()
    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.destroyChangeSubscriptions()
    }

    private buildObservables(): void {
        this.observables = [this.theme$, this.themeMode$, this.font$]

        this.createChangeSubscriptions()
    }

    private createChangeSubscriptions(): void {
        this.observables.forEach((observable) => {
            const subscription = observable.subscribe((_) => {
                this.setBodyAttributes()
            })

            this.subscriptions.push(subscription)
        })
    }

    private destroyChangeSubscriptions(): void {
        this.subscriptions.forEach((subscription) => {
            subscription.unsubscribe?.()
        })
    }

    /**
     * Checks the window mode and sets the theme mode based on light or dark mode.
     */
    checkWindowMode(): void {
        const query = window.matchMedia(this.prefersLightScheme)
        const isLightMode = query.matches ? 'light' : 'dark'

        this.setThemeMode(isLightMode)

        // Setup for future changes in browser without reloading website.
        // TODO: TEST THIS!!!
        query.addEventListener('change', (e) => this.handleListenerChange(e))
    }

    handleListenerChange(e: MediaQueryListEvent): void {
        if (!e || e instanceof MediaQueryListEvent !== true) {
            console.error('Unable to process media query in themeService.handleListenerChange() with value given: ', e)
            return
        }
        const mode = e.matches ? 'light' : 'dark'
        this.setThemeMode(mode)
    }

    setFont(font: string): void {
        if (!font || !this.fonts.includes(font)) {
            console.error('Unable to process font in themeService.setFontType() with value given: ', font)
            return
        }
        this._font.set(font)
    }

    setBodyAttributes(): void {
        document.body.setAttribute('data-theme', this._theme())
        document.body.setAttribute('data-theme-mode', this._themeMode())

        // NOTE: Putting fontFamily as a CSS variable is way to much work when you can just do this
        //       and have it propagate throughout the DOM.
        document.body.style.fontFamily = this._font()
    }

    /**
     * Toggles the theme mode between light and dark {@link ThemeModes}
     */
    toggleThemeMode(): void {
        const mode = this._themeMode()
        const nextMode = mode === 'light' ? 'dark' : 'light'
        this.setThemeMode(nextMode)
    }

    /**
     * Manually set the theme mode. See {@link ThemeModes}
     * @param mode The theme mode to set.
     */
    setThemeMode(mode: ThemeModes): void {
        if (!mode || !themeModes.includes(mode)) {
            console.error('Unable to process theme mode in themeService.setThemeMode() with value given: ', mode)
            return
        }

        this._themeMode.set(mode)
    }

    /**
     * Sets the theme for the entire app. See {@link Themes}
     * @param theme The theme name to set.
     */
    setTheme(theme: Themes): void {
        if (!theme || !themes.includes(theme)) {
            console.error('Unable to process theme in themeService.setTheme() with value given: ', theme)
            return
        }

        this._theme.set(theme)
    }
}
