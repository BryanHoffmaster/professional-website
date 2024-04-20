import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Serifs, ThemeService } from '../services/theme.service';

// TODO: Turn theme and font switcher into it's own service(s?)
// TODO: Make a drop down for your theme colors
// TODO: Get light/dark icons to click on and change the light dark modes of your computer.
// TODO: MAKE THIS AN ONPUSH APPLICATION ONLY! SIGNALS AND AUTO SUBSCRIPTIONS IN DOM

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
    listeners: any = [] // signal??

    themeService = inject(ThemeService)

    /**
     * @param event
     * @returns
     */
    onSerifSelectionChange(event: Event) {
        if (!event || event instanceof Event !== true) {
            console.error('Unable to process event in app.component.onSerifSelectionChange() with event given: ', event)
            return
        }

        const value = (event.target as HTMLSelectElement)?.value as Serifs // TODO: I don't like this :(

        if (!value) {
            console.error(
                'Unable to process serif value in app.component.onSerifSelectionChange() with value given: ',
                value
            )
            return
        }


        this.themeService.setSerif(value)
    }

    onThemeSelectionChange(event: Event) {
        if (!event || event instanceof Event !== true) {
            console.error('Unable to process event in app.component.onThemeSelectionChange() with event given: ', event)
            return
        }
    }
}
