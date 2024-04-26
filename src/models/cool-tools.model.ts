export interface CardData {
    header?: string
    content?: string
    imgSrc?: string
    imgAlt?: string
    link?: string
}

export class Card implements CardData {
    header: string = ''
    content: string = ''
    imgSrc: string = ''
    imgAlt: string = ''
    link: string = ''

    constructor(cardData?: CardData) {
        if (cardData) {
            Object.assign(this, cardData)
        }

        if(!this.imgSrc){
            this.imgSrc='assets/images/jpeg/cardPlaceHolder.jpg'
        }
    }
}
