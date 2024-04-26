import { ChangeDetectionStrategy, Component, signal } from '@angular/core'
import { Card, CardData } from '../../models/cool-tools.model'
import { CardComponent } from '../card/card.component'

// TODO:
// * Filter/Search bar for card/tools
// * Sub-header description for this content?

@Component({
    selector: 'app-tools',
    standalone: true,
    imports: [CardComponent],
    templateUrl: './tools.component.html',
    styleUrl: './tools.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolsComponent {
    private _cards = signal<CardData[]>([])
    readonly cards = this._cards.asReadonly()

    constructor() {
        this.loadCards()
    }

    async loadCards() {
        const json = await import('../../assets/content/tech-tools.json')

        let cards: CardData[] = []
        json.cards.forEach((card) => cards.push(new Card(card)))

        // TODO: remove after testing
        const fakeCards = await this.getTestCards()
        cards = [...cards, ...fakeCards]

        this._cards.set(cards)
    }

    private async getTestCards(): Promise<CardData[]> {
        const json = await import('../../assets/content/tech-tools.fake-data.json')

        let cards: CardData[] = []
        json.cards.forEach((card) => cards.push(new Card(card)))

        return cards
    }
}
