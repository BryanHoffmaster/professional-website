import { Directive, inject } from '@angular/core'
import { Subscription } from 'rxjs'
import { ThemeService } from '../services/theme.service'

@Directive({
    selector: '[fontSwitcher]',
    standalone: true,
})
export class FontSwitcherDirective {
    // TODO: THIS NEEDS MORE FONTS TO SWITCH TO. Currently this only switches serif fonts.
    // TODO: DO NOT USE THIS YET
    private themeService = inject(ThemeService)
    private observables: Subscription[] = []

    constructor(private el: HTMLElement) {
        const obsRef = this.themeService.font$.subscribe((value) => {
            console.log('FontSwitcherDirective.onSerifSelectionChange() - value: ', value)
            this.el.setAttribute('data-font', value)
        })
        this.observables.push(obsRef)
    }

    ngOnDestroy(): void {
        this.observables.forEach((observable) => {
            observable.unsubscribe()
        })
    }
}
