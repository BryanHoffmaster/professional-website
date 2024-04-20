import { ThemeSwitcherDirective } from './theme-switcher.directive'

describe('ThemeSwitcherDirective', () => {
    it('should create an instance', () => {
        const el = document.createElement('div')
        const directive = new ThemeSwitcherDirective(el)
        expect(directive).toBeTruthy()
    })
})
