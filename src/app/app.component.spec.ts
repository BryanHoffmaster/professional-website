import { TestBed } from '@angular/core/testing'
import { AppComponent } from './app.component'

describe('AppComponent', () => {
    // TODO: Is there a way to run all of these with `runInInjectionContext` from the testbed?
    // -> maybe you can provide it through a token that tells Testbed to run all code with that?

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AppComponent],
            providers: [
                // TODO: HERE IS THE ISSUE YOU ARE NOT "INJECTING" THE SERVICE IN CORRECTLY
                // {provide: ThemeService, useValue: ThemeService}
            ]
        }).compileComponents()
    })

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent)
        const app = fixture.componentInstance
        expect(app).toBeTruthy()
    })

    it(`should have the 'professional-website' title`, () => {
        const fixture = TestBed.createComponent(AppComponent)
        const app = fixture.componentInstance
        expect(app.title).toEqual('professional-website')
    })

    it('should render title', () => {
        const fixture = TestBed.createComponent(AppComponent)
        fixture.detectChanges()
        const compiled = fixture.nativeElement as HTMLElement
        expect(compiled.querySelector('h1')?.textContent).toContain("Welcome to Hoff's Page! ")
    })

    describe('isDarkMode', () => {
        it('should return true when theme mode is dark', () => {
            TestBed.runInInjectionContext(() => {
                const component = new AppComponent()
                component.themeService.setThemeMode('dark')
                expect(component.isDarkMode).toBe(true)
            })
        })

        it('should return false when theme mode is light', () => {
            TestBed.runInInjectionContext(() => {
                const component = new AppComponent()
                component.themeService.setThemeMode('light')
                expect(component.isDarkMode).toBe(false)
            })
        })
    })

    describe('themeMode', () => {
        it('should return theme mode from theme service', () => {
            TestBed.runInInjectionContext(() => {
                const component = new AppComponent()
                const themeMode = 'dark'
                expect(component.themeMode).toBe(themeMode)
            })
        })
    })

    describe('onSerifSelectionChange', () => {
        it('should log error on invalid event', () => {
            TestBed.runInInjectionContext(() => {
                spyOn(console, 'error')
                let tests = [null, '', 0, 1, [], {}].forEach((event) => {
                    const component = new AppComponent()
                    component.onSerifSelectionChange(event as Event)
                    expect(console.error).toHaveBeenCalled()
                })
            })
        })

        it('should log error on invalid serif value', () => {
            TestBed.runInInjectionContext(() => {
                spyOn(console, 'error')
                const event = { target: {} }
                const component = new AppComponent()
                component.onSerifSelectionChange(event as Event)
                expect(console.error).toHaveBeenCalled()
            })
        })
    })

    describe('onThemeSelectionChange', () => {
        it('should log error on invalid event', () => {
            TestBed.runInInjectionContext(() => {
                spyOn(console, 'error')
                const component = new AppComponent()
                let tests = [null, '', 0, 1, [], {}].forEach((event) => {
                    component.onThemeSelectionChange(event as Event)
                    expect(console.error).toHaveBeenCalled()
                })
            })
        })

        it('should log error on invalid theme value', () => {
            TestBed.runInInjectionContext(() => {
                const consoleSpy = spyOn(console, 'error')
                const event = { target: {} }
                const component = new AppComponent()
                component.onThemeSelectionChange(event as Event)
                expect(consoleSpy).toHaveBeenCalled()
            })
        })
    })
})
