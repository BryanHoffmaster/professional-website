import { Directive, inject } from '@angular/core'
import { Subscription } from 'rxjs'
import { ThemeService } from '../services/theme.service'

@Directive({
    selector: '[themeSwitcher]',
    standalone: true,
})
export class ThemeSwitcherDirective {
    private themeService = inject(ThemeService)
    private observables: Subscription[] = []

    constructor(private el: HTMLElement) {
        const obsRef = this.themeService.theme$.subscribe((value) => {
            console.log('ThemeSwitcherDirective.onThemeSelectionChange() - value: ', value)
            this.el.setAttribute('data-theme', value)
        })
        this.observables.push(obsRef)
    }

    ngOnDestroy(): void {
        this.observables.forEach((observable) => {
            observable.unsubscribe()
        })
    }
}
