import { Directive, inject } from '@angular/core'
import { Subscription } from 'rxjs'
import { ThemeService } from '../services/theme.service'

@Directive({
    selector: '[serifSwitcher]',
    standalone: true,
})
export class SerifSwitcherDirective {
    private themeService = inject(ThemeService)
    private observables: Subscription[] = []

    constructor(private el: HTMLElement) {
        console.log('SerifSwitcherDirective.onSerifSelectionChange()')
        const obsRef = this.themeService.serif$.subscribe((value) => {
            console.log('SerifSwitcherDirective.onSerifSelectionChange() - value: ', value)
            this.el.setAttribute('data-serif', value)
        })
        this.observables.push(obsRef)
    }

    ngOnDestroy(): void {
        this.observables.forEach((observable) => {
            observable.unsubscribe()
        })
    }
}
