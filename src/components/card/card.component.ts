import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { CardData } from '../../models/cool-tools.model'

// TODO:
// * Nice hover animations - maybe something like a "glare" effect on them
// * Cards should have a shallow 3D effect to them, accentuated even more when hovered over
// * Card images should have a slight fade/blur effect to their edges (make them look you're peering in to a portal?)

@Component({
    selector: 'app-card',
    standalone: true,
    imports: [],
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
    @Input() cardData: CardData = {
        imgSrc: '',
        imgAlt: '',
        header: '',
        content: '',
        link: '',
    }

    onClick() {
        if (!this.cardData.link) {
            console.warn(`No link set for card`, this.cardData )
            return
        }
        window.open(this.cardData.link, '_blank')
    }
}
