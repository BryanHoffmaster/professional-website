import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, signal } from '@angular/core'
import { BlogContent } from '../../models/content.model'

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
    private _content = signal<BlogContent | null>(null)
    readonly content = this._content.asReadonly()

    constructor() {
        this.loadData()
    }

    async loadData() {
        const json = await import('../../assets/content/home.json')
        this._content.set(json.default as BlogContent)
    }
}
