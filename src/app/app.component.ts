import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// TODO: Turn theme and font switcher into it's own service(s?)
// TODO: Make a drop down for your theme colors
// TODO: Get light/dark icons to click on and change the light dark modes of your computer.
// TODO: MAKE THIS AN ONPUSH APPLICATION ONLY! SIGNALS AND AUTO SUBSCRIPTIONS IN DOM

// TYPES PREAMBLE //
const fontTypesConst = ['serif', 'sans-serif', 'none'] as const
type FontTypesTuple = typeof fontTypesConst
type FontTypes = FontTypesTuple[number]

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
    title = 'professional-website'
    readonly fontTypes = fontTypesConst
    listeners: any = [] // signal??

    // TODO: Inject the service for switching the themes via the "inject()" core function


    fontType: FontTypes = 'none' // TODO: Signal - Currently shows wrong font type on load of the page!!
    colorScheme = '' // TODO: signal
    isLightTheme = true // TODO: signal

    private readonly prefersLightScheme = '(prefers-color-scheme: light)'

    ngOnInit(): void {
        // TODO: this should call a standard function
        //       or better yet should be injected into the app via the theme service
        this.colorScheme = document.body.getAttribute('data-theme-color')?.toString() || this.colorScheme
        this.setFont("sans-serif")
    }

    ngOnDestroy(): void {
        // Be sure to remove listener when you can, kind of moot on the main component, but still good practice.
        // NOTE that this is only for callbacks to proper handlers!
        this.listeners.forEach((listener: MediaQueryList) => {
            listener?.removeEventListener?.("change", this.handleListenerChange);
        });
    }

    /**
     * onLoad of the host component, set the theme based on what is set locally.
     * @param event
     */
    @HostListener('window:load', ['$event'])
    setThemeBasedOnMediaQuery(event: Event) {
        // TODO: Turn this into a service that listens for changes on light/dark modes
        //       and then uses them to push those changes up to their respective components.
        const query = window.matchMedia(this.prefersLightScheme)
        const lightMode = this.getModeString(query)

        this.setFont('');

        // set mode
        this.setLightDarkMode(lightMode)

        // listen for future changes
        query.addEventListener("change", (e) => this.handleListenerChange(e))
        if (query) this.listeners.push(query)
    }

    private getModeString(q: MediaQueryList) {
        return q.matches ? 'light' : 'dark'
    }

    handleListenerChange(e: Event) {
        this.setLightDarkMode(this.getModeString(window.matchMedia(this.prefersLightScheme)))
    }


    setLightDarkMode(mode: string) {
        document.body.setAttribute(
            'data-theme',
            mode
        )

        this.isLightTheme = mode.toLocaleLowerCase() === 'light' ? true : false;
    }

    setFont(font: string | Event) {
        if (!font) return;
        // TODO: do this more reactively
        if (font instanceof Event) {
            const value = (font.target as HTMLSelectElement)?.value as FontTypes; // TODO: I don't like this :(
            if (fontTypesConst.includes(value)) {
                this.fontType = value;
            }
        }

        if (typeof font === "string"){
            if (fontTypesConst.includes(font as FontTypes)) {
                this.fontType = font as FontTypes;
            }
        }

        document.body.setAttribute('data-font-family', this.fontType)
    }

    onThemeSwitchChange(): void {
        this.isLightTheme = !this.isLightTheme
        this.setLightDarkMode(this.isLightTheme ? 'light' : 'dark')
    }
}
