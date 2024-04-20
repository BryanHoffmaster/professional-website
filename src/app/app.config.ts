import { ApplicationConfig } from '@angular/core'
import { provideRouter } from '@angular/router'
import { ThemeModeSwitcherDirective } from '../directives/theme-mode-switcher.directive'

import { SerifSwitcherDirective } from '../directives/serif-switcher.directive'
import { ThemeSwitcherDirective } from '../directives/theme-switcher.directive'
import { ThemeService } from '../services/theme.service'
import { routes } from './app.routes'

export const appConfig: ApplicationConfig = {
    providers: [provideRouter(routes), ThemeModeSwitcherDirective, SerifSwitcherDirective, ThemeSwitcherDirective, ThemeService],
}
