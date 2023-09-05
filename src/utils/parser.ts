import _ from 'lodash';

export interface Card {
    name: string;
    count: number;
}

export function parseDeck(deck: string): Card[] {
    const parsed = deck.split('\n').flatMap((line) => {
        const [countString, ...name] = line.split(' ');
        const count = parseInt(countString);
        if (Number.isNaN(count) || name.length === 0) return [];
        return {count: count, name: name.join(' ')};
    });
    return compact(parsed);
}

function compact(deck: Card[]): Card[] {
    const grouped = _.groupBy(deck, (card) => card.name);
    return _.map(grouped, (cards, name) => ({
        name,
        count: _.sumBy(cards, (card) => card.count)
    }))
}