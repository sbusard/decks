import _ from 'lodash';

export interface Card {
    name: string;
    count: number;
}

export class Deck {
    main: Card[];
    sideboard: Card[];
    size: number;
    constructor(main: Card[], sideboard: Card[]) {
        this.main = main;
        this.sideboard = sideboard;
        this.size = _.sumBy(main, (card) => card.count) + _.sumBy(sideboard, (card) => card.count);
    }
}

export function parseDeck(deck: string): Deck {
    const lines = deck.split('\n').filter((line) => line.length > 0);
    const sideboardIndex = lines.findIndex((line) => line.trim().toLowerCase().startsWith('sideboard'));
    if (sideboardIndex === -1) {
        return new Deck(compactDuplicates(_.compact(lines.map(parseCard))), [] );
    } else {
        return new Deck(
            compactDuplicates(_.compact(lines.slice(0, sideboardIndex).map(parseCard))),
            compactDuplicates(_.compact(lines.slice(sideboardIndex + 1).map(parseCard)))
        );
    }
}

function parseCard(card: string): Card | undefined {
    const [countString, ...name] = card.split(' ');
    const count = parseInt(countString);
    if (Number.isNaN(count) || name.length === 0) return undefined;
    return {count: count, name: name.join(' ')};
}

function compactDuplicates(deck: Card[]): Card[] {
    const grouped = _.groupBy(deck, (card) => card.name);
    return _.map(grouped, (cards, name) => ({
        name,
        count: _.sumBy(cards, (card) => card.count)
    }))
}