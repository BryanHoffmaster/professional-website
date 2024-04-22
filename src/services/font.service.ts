import { Injectable, computed, signal } from '@angular/core'

/**
 * This service handles the capturing and manipulation of loaded fonts in the browser
 * tab session.
 */
@Injectable({
    providedIn: 'root',
})
export class FontService {
    /**
     * List of installed fonts in the browser DOM for this tab open.
     * NOTE: There will be duplicate font families but with different weights and styles.
     */
    installedFonts = signal<FontFace[]>([])

    /**
     * List of unique font families installed on the machine.
     */
    availableFonts = computed(() => {
        // installedFonts will have many duplicates, so we need to filter them out
        return [...new Set(this.installedFonts().map((font) => font.family))]
    })

    constructor() {
        this.buildLocalFontsList()
    }

    /**
     * Gets and sets the list of currently loaded fonts in the browser tab.
     * NOTE: This *should* be okay to use in the constructor, but may need to be
     *       attached to a "@hostListener" load event.
     */
    private buildLocalFontsList(): void {
        let fonts: FontFace[] = []
        document.fonts.forEach((fontFace) => {
            fonts.push(fontFace)
        })

        this.installedFonts.set(fonts)
    }
}
