import { Directive, ElementRef, Renderer2, inject } from '@angular/core'
import { Subscription } from 'rxjs'
import { ThemeService } from '../services/theme.service'

@Directive({
    selector: '[themeModeSwitcher]',
    standalone: true,
})
export class ThemeModeSwitcherDirective {
    private themeService = inject(ThemeService)
    private observables: Subscription[] = []

    constructor(private renderer: Renderer2, private el: ElementRef) {}

    ngOnInit(): void {
        const obsRef = this.themeService.themeMode$.subscribe((value) => {
            console.log('ThemeModeSwitcherDirective.onThemeModeSelectionChange() - value: ', value)
            // this.el.nativeElement.setAttribute('data-theme-mode', value)
            this.renderer.setAttribute(this.el.nativeElement, 'data-theme-mode', value)
        })
        this.observables.push(obsRef)
    }

    ngOnDestroy(): void {
        this.observables.forEach((observable) => {
            observable.unsubscribe()
        })
    }
}
