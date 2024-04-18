import { Component, HostBinding, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'professional-website';

  listeners:any = []

  public isLightTheme = true
  private prefersLightScheme = '(prefers-color-scheme: light)'

  // onload of the host component, get media query and change theme accordingly
  @HostListener('window:load', ['$event'])
  setThemeBasedOnMediaQuery(event: Event) {
    const query = window.matchMedia(this.prefersLightScheme)
    const lightMode = this.getModeString(query)

    this.setFont('');

    // set mode
    this.setLightDarkMode(lightMode)

    // listen for future changes
    query.addEventListener("change", this.handleListenerChange)
    if (query) this.listeners.push(query);
  }

  private getModeString(q: MediaQueryList){
    return q.matches ? 'light' : 'dark'
  }

  handleListenerChange(e: Event){
    this.setLightDarkMode(this.getModeString(window.matchMedia(this.prefersLightScheme)))
  }


  ngOnDestroy(): void {
    // Be sure to remove listener when you can, kind of moot on the main component, but still good practice.
    // NOTE that this is only for callbacks to proper handlers!
    this.listeners.forEach((listener: MediaQueryList) => {
      listener?.removeEventListener?.("change", this.handleListenerChange);
    });
  }

  setLightDarkMode(mode: string) {
    document.body.setAttribute(
      'data-theme',
      mode
    )

    this.isLightTheme = mode.toLocaleLowerCase() === 'light' ? true : false;
  }

  setFont(font:string){
    // "sans|sans-serif" for now
    document.body.setAttribute('data-font-family', 'sans-serif')
  }

  onThemeSwitchChange(): void {
    this.isLightTheme = !this.isLightTheme
    this.setLightDarkMode(this.isLightTheme ? 'light' : 'dark')
  }


}
